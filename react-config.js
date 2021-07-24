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
      open: true,
      contentBase: "./dist",
    },
    // skip config file
    skipConfigFile: true,

    // wp5 Module Federation
    moduleFederationOptions: {
      name: appName,
      shared: {
        react: {
          singleton: true,
          requiredVersion: "17.0.2",
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "17.0.2",
          eager: true,
        },
        "@material-ui/styles": {
          singleton: true,
          requiredVersion: "5.0.0-alpha.20",
          eager: true,
        },
      },
      filename: "remoteEntry.js",
      exposes: expose
        ? {
            "./App": `./src/App`,
          }
        : {},
      remotes: remotes || {},
    },

    // custom wp config
    webpack: (config) => {
      config.output.publicPath = "/";
    },
  });
