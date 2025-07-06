const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        CardDetail: "remoteApp@http://localhost:3001/remoteEntry.js",
        CardShort: "remoteApp@http://localhost:3001/remoteEntry.js",
        ToDoApp: "ToDoApp@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
