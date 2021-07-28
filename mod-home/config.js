const configurator = require("../react-config");
const appName = "modHome";
const port = 4002;

module.exports = configurator({ appName, port, expose: true });
