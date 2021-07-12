const defaultConfig = require("../webpack.default");

module.exports = defaultConfig({
  appName: "appMain",
  port: 5000,
  remotes: {
    modHeader: "modHeader@http://localhost:3000/modHeader.js",
  },
});
