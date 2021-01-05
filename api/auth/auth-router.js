const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secret");

const User = require("../users/user-model");
const { isValid } = require("../users/user-service");

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
    res.status(400).json("username, password, and role required");
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    User.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = makeToken(user);
          const role = user.role;
          res
            .status(200)
            .json({ message: `welcome, ${user.username}`, token, role });
        } else {
          res.status(401).json("invalid credentials");
        }
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } else {
    res.status(400).json("username and password required");
  }
});

function makeToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  };
  const options = {
    expiresIn: "900s",
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
