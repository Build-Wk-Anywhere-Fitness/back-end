const router = require("express").Router();

const User = require("./user-model");

router.get("/", (req, res) => {
  User.getAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
