const configurator = require("../react-config");
const appName = "modApp";
const port = 4000;

module.exports = configurator({ appName, port, expose: true });
