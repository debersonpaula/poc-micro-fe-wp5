const configurator = require("../react-config");
const appName = "modApp";
const port = 4001;

module.exports = configurator({
  appName,
  port,
  expose: true,
  remotes: {
    modHeader: "modHeader@http://localhost:4000/remoteEntry.js",
  },
});
