const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = {
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: resolve(__dirname, "node_modules"),
        loader: "ts-loader",
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "public/index.html"),
      excludeChunks: ["main"],
    }),
  ],
};

const main = Object.assign({
  target: "electron-main",
  entry: {
    main: resolve(__dirname, "src/main.tsx"),
  },
}, common);

const app = Object.assign({
  target: "electron-renderer",
  entry: {
    app: resolve(__dirname, "src/app.tsx"),
  },
}, common);

module.exports = [main, app];
