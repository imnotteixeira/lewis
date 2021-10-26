const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/client/components/app.tsx",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 8080,
        host: "0.0.0.0",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
    ],
    output: {
        path: `${__dirname}/public`,
        filename: "build/[name].[contenthash].js",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
        ],
    },
};
