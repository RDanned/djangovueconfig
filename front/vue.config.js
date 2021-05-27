const path = require("path");

module.exports = {
  publicPath: process.env.VUE_APP_STATIC_URL,
  outputDir: path.resolve(__dirname, "../testdocker/templates/static"),
  indexPath: path.resolve(__dirname, "../testdocker/templates/", "index.html"),
};