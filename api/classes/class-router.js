const router = require("express").Router();

const Class = require("./class-model");
const checkRole = require("../middleware/checkRole");

// checkRole("instructor")
router.post("/", (req, res) => {
  Class.add(req.body)
    .then((newClass) => {
      res.status(201).json(newClass);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

// checkRole("instructor")
router.put("/:id", (req, res) => {
  //
});

// checkRole("instructor")
router.delete("/:id", (req, res) => {
  //
});

router.get("/", (req, res) => {
  Class.getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(err.message);
    });
});

router.get("/:id", (req, res) => {
  Class.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/time", (req, res) => {
  Class.findBy(/* query */)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/date", (req, res) => {
  Class.findBy(/* query */)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/duration", (req, res) => {
  Class.findBy(/* query */)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/type", (req, res) => {
  Class.findBy(/* query */)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/intensity", (req, res) => {
  Class.findBy(/* query */)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/location", (req, res) => {
  Class.findBy(/* query */)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/instructor", (req, res) => {
  Class.findBy(/* query */)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
