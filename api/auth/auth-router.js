const router = require("express").Router();
const bcryptjs = require("bcryptjs");

const User = require("../users/user-model");
const { isValid } = require("../users/user-service");
const { generateToken } = require("../../utils/generateToken");

router.post("/register", (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 11;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;

    User.add(credentials)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } else {
    res.status(400).json("Username, password, and role required");
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    User.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = generateToken(user);
          const role = user.role;
          res
            .status(200)
            .json({ message: `Welcome, ${user.username}`, token, role });
        } else {
          res.status(401).json("Invalid credentials");
        }
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } else {
    res.status(400).json("Username and password required");
  }
});

module.exports = router;
