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

router.post("/time", (req, res) => {
  const { start_time } = req.body;
  Class.findBy("start_time", start_time)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

// router.post("/date", (req, res) => {
//   Class.findBy(/* query */)
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       res.status(500).json(err.message);
//     });
// });

router.post("/duration", (req, res) => {
  const { duration } = req.body;
  Class.findBy("duration", duration)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.post("/type", (req, res) => {
  const { type } = req.body;
  Class.findBy("type", type)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.post("/intensity", (req, res) => {
  const { intensity_level } = req.body;
  Class.findBy("intensity_level", intensity_level)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.post("/location", (req, res) => {
  const { location } = req.body;
  Class.findBy("location", location)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

// router.post("/instructor", (req, res) => {
//   Class.findBy(/* query */)
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       res.status(500).json(err.message);
//     });
// });

module.exports = router;
