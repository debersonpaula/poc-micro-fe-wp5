const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = ({ appName, port, remotes = null, exposes = null }) => ({
  entry: "./src/index.ts",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: port,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx|js|mjs|jsx)$/,
      //   loader: "babel-loader",
      //   exclude: /node_modules/,
      //   options: {
      //     presets: ["@babel/preset-react", "@babel/preset-typescript"],
      //   },
      // },
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
        options: {
          target: "es2015",
          loader: "tsx",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: appName,
      remotes: remotes || {},
      exposes: exposes || {},
      shared: ["react", "react-dom", "@material-ui/styles"],
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});
