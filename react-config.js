const { DefaultConfig } = require("tsrx/tools");

module.exports = ({ appName, port, expose = false, remotes = null }) =>
  DefaultConfig({
    // source of files
    // sourcePath: appPath,
    // index file
    sourceFile: "index.ts",
    // output path
    outputPath: "dist",
    // index.html template
    htmlTemplate: "./public/index.html",
    // port
    port,
    // hostname
    host: "localhost",
    // development server
    devServer: {
      open: false,
      // contentBase: "./dist",
    },
    // skip config file
    skipConfigFile: true,

    // wp5 Module Federation
    moduleFederationOptions: {
      name: appName,
      shared: ["react", "react-dom", "@material-ui/styles", "react-router-dom"],
      filename: "remoteEntry.js",
      exposes: expose
        ? {
            "./App": `./src/App`,
          }
        : {},
      remotes: remotes || {},
    },

    // custom wp config
    // webpack: (config) => {
    //   config.output.publicPath = "auto";
    // },
  });
