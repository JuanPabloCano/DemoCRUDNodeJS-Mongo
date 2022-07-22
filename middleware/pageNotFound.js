const PageNotFound = (req, res, next) => {
  res.status(404).json({
    error: -2,
    descripcion: `Ruta ${req.url} no implementada`,
  });
  next();
};

module.exports = PageNotFound;
