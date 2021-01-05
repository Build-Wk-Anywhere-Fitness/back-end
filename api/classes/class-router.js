const router = require("express").Router();

const Class = require("./class-model");
const checkRole = require("../middleware/checkRole");

router.post("/", checkRole("instructor"), (req, res) => {
  Class.add(req.body)
    .then((newClass) => {
      res.status(201).json(newClass);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.put("/:id", checkRole("instructor"), (req, res) => {
  Class.edit(req.params.id, req.body)
    .then((editedClass) => {
      res.status(200).json(editedClass);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.delete("/:id", checkRole("instructor"), (req, res) => {
  const { id } = req.params;
  Class.remove(id)
    .then(() => {
      res.status(200).json(`Class ${id} has been removed`);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
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
