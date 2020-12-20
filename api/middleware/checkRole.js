function checkRole(...allowed) {
  const isAllowed = (role) => allowed.indexOf(role) > -1;

  return (req, res, next) => {
    if (req.user && isAllowed(req.user.role)) {
      next();
    } else {
      res.json(403).json("You are not an instructor");
    }
  };
}

module.exports = {
  checkRole,
};
