const router = require("express").Router();
const checkRole = require("../middleware/checkRole");

// checkRole("instructor")
router.post("/", (req, res) => {
  //
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
  //
});

router.get("/:id", (req, res) => {
  //
});

router.get("/time", (req, res) => {
  //
});

router.get("/date", (req, res) => {
  //
});

router.get("/duration", (req, res) => {
  //
});

router.get("/type", (req, res) => {
  //
});

router.get("/intensity", (req, res) => {
  //
});

router.get("/location", (req, res) => {
  //
});

router.get("/instructor", (req, res) => {
  //
});

module.exports = router;
