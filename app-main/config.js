const configurator = require("../react-config");
const appName = "main";
const port = 5000;

module.exports = configurator({
  appName,
  port,
  expose: false,
  open: true,
  remotes: {
    modApp: "modApp@http://localhost:4001/remoteEntry.js",
    modHome: "modHome@http://localhost:4002/remoteEntry.js",
    modAbout: "modAbout@http://localhost:4003/remoteEntry.js",
  },
});
