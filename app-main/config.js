const configurator = require("../react-config");
const appName = "main";
const port = 5000;

module.exports = configurator({
  appName,
  port,
  expose: false,
  remotes: {
    modApp: "modApp@http://localhost:4001/remoteEntry.js",
  },
});
