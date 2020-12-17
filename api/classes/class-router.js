const router = require("express").Router();
const checkRole = require("../middleware/checkRole");

router.post("/", checkRole("instructor"), (req, res) => {
  //
});

router.put("/:id", checkRole("instructor"), (req, res) => {
  //
});

router.delete("/:id", checkRole("instructor"), (req, res) => {
  //
});

router.get("api/classes", (req, res) => {
  //
});

router.get("api/classes/:id", (req, res) => {
  //
});

router.get("api/classes/location", (req, res) => {
  //
});

router.get("api/classes/intensity", (req, res) => {
  //
});

router.get("api/classes/duration", (req, res) => {
  //
});

router.get("api/classes/type", (req, res) => {
  //
});

router.get("api/classes/instructor", (req, res) => {
  //
});

module.exports = router;
