const fs = require("fs");
const path = require("path");
const logger = (req, res, next) => {
  const logMessage = `${new Date().toLocaleString()}-${req.method}${
    req.url
  }-${JSON.stringify(req.body)}\n`;

  fs.appendFile(
    path.join(__dirname, "../logs/requests.log"),
    logMessage,
    (err) => {
      if (err) throw err;
    }
  );
  next();
};
module.exports = logger;
