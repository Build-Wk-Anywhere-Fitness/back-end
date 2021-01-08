function checkPayload(req, res, next) {
  if (!req.body.username || !req.body.password || !req.body.role) {
    res
      .status(401)
      .json({ error: "Please provide username, password, and role" });
  } else {
    next();
  }
}

module.exports = {
  checkPayload,
};
