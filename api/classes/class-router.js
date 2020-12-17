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

router.get("api/classes", (req, res) => {
  //
});

router.get("api/classes/:id", (req, res) => {
  //
});

router.get("api/classes/time", (req, res) => {
  //
});

router.get("api/classes/date", (req, res) => {
  //
});

router.get("api/classes/duration", (req, res) => {
  //
});

router.get("api/classes/type", (req, res) => {
  //
});

router.get("api/classes/intensity", (req, res) => {
  //
});

router.get("api/classes/location", (req, res) => {
  //
});

router.get("api/classes/instructor", (req, res) => {
  //
});

module.exports = router;
