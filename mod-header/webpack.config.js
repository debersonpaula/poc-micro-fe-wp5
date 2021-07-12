const defaultConfig = require("../webpack.default");

module.exports = defaultConfig({
  appName: "modHeader",
  port: 3000,
  exposes: {
    "./App": "./src/App",
  },
});
