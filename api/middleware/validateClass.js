function validateClass(req, res, next) {
  if (
    !req.body.name ||
    !req.body.type ||
    !req.body.date ||
    !req.body.time ||
    !req.body.duration ||
    !req.body.intensity ||
    !req.body.location ||
    !req.body.max_size
  ) {
    res.status(401).json({
      error:
        "Please provide the following: name, type, date, time, duration, intensity, location, max_size (integer), and attendee_count (integer)",
    });
  } else {
    next();
  }
}

module.exports = {
  validateClass,
};
