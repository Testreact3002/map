const path = require("path");
const glob = require("glob");

const apps = glob.sync('apps/*/');

const app = apps[0];
const oldConfig = require("./webpack.js");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const iPath = path.resolve(app, "src");
const oPath = path.resolve(app, "dist");
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(iPath, "index.tpl.html"),
  filename: path.join(oPath, "index.html"),
});
const output = {
  path: oPath,
  filename: "index.js",
};
const opt = {
  optimization: {
    minimize: false,
  },
};
const config = {
  ...oldConfig,
  output,
  entry: path.join(iPath, "index.js"),
  ...opt,
};
config.plugins.push(htmlPlugin);
module.exports = config;
/*
const iPath = path.join(__dirname, "src");
const oPath = path.join(__dirname, "dist");
//const fs = require("fs");
console.log(iPath,oPath);
throw Error();
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(iPath, "index.tpl.html"),
  filename: path.join(oPath, "index.html"),
});
const output = {
  path: oPath,
  filename: "index.js",
};
const opt = {
  optimization: {
    minimize: false,
  },
};
const config = {
  ...oldConfig,
  output,
  entry: path.join(iPath, "index.js"),
  ...opt,
};
config.plugins.push(htmlPlugin);
module.exports = config;
*/
