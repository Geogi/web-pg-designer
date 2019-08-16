const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    entry: resolve(__dirname, "src/main.tsx"),
    devServer: {
        contentBase: resolve(__dirname, "src"),
        liveReload: true,
        publicPath: "/",
        quiet: true,
        noInfo: true,
    },
    output: {
        path: resolve(__dirname, "dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: resolve(__dirname, "node_modules"),
                loader: "ts-loader"
            },
            {
                test: /\.html$/,
                exclude: resolve(__dirname, "node_modules"),
                loader: 'html-loader',
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "public/index.html"),
        }),
    ],
};