const router = require("express").Router();

const Class = require("./class-model");
const checkRole = require("../middleware/checkRole");

router.post("/", checkRole("instructor"), (req, res) => {
  Class.add(req.body)
    .then((newClass) => {
      res.status(201).json(newClass);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/:id", checkRole("instructor"), (req, res) => {
  Class.edit(req.params.id, req.body)
    .then((editedClass) => {
      res.status(200).json(editedClass);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/:id", checkRole("instructor"), (req, res) => {
  const { id } = req.params;

  Class.remove(id)
    .then(() => {
      res.status(200).json({ message: `Class ${id} has been removed` });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  Class.getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  Class.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/type", (req, res) => {
  const { type } = req.body;

  Class.findBy("type", type)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/date", (req, res) => {
  const { date } = req.body;

  Class.findBy("date", date)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/time", (req, res) => {
  const { time } = req.body;

  Class.findBy("time", time)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/duration", (req, res) => {
  const { duration } = req.body;

  Class.findBy("duration", duration)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/intensity", (req, res) => {
  const { intensity } = req.body;

  Class.findBy("intensity", intensity)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/location", (req, res) => {
  const { location } = req.body;

  Class.findBy("location", location)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
