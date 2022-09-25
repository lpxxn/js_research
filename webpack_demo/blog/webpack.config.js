const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        filename: "dist.js",
        //firstname: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    // 压缩
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    resolve: {
        alias: {
            utils: path.resolve(__dirname, "src/utils"),
        }
    },
    devServer: {
        static: "./dist"
    },
    plugins: [new HtmlWebpackPlugin({
        title: "my demo"
    }), new BundleAnalyzerPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }, {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}