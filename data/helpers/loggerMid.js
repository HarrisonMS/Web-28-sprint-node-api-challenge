const loggerMid = (req, res, next) => {
  console.log(`${req.method} to ${req.originalUrl} at ${new Date()}`);
  next();
}
module.exports = {
  loggerMid : loggerMid
}