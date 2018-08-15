const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./server/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    publicPath: "/"
  },
  target: "node",
  externals: nodeExternals(),

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },

      {
        test: /\.css$/,
        loaders: ["css-loader"]
      }
    ]
  }
};
