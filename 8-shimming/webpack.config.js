const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/[name]-bundle.js',
        chunkFilename: 'js/[name]-chunk.js',
        clean: true
    },
    devServer:{
        port: 3000,
        compress: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm', '.ts']
    },
    optimization: {
        chunkIds: 'deterministic',
        splitChunks:{
            chunks: 'all',
            minSize: 10,
            // cacheGroups: {

            // }
        },
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
            terserOptions:{
                compress:{
                    arguments: true,
                    dead_code: false
                },
                mangle: true,
                keep_fnames: true,
                keep_classnames: true
            }
        })]
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                // 从后往前的顺序
                use: [
                    // 1. 内联插入 开发环境
                    // 'style-loader',
                    // 2. 单独提取 link的方式 生产环境
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // 完成css提取
        new MiniCssExtractPlugin({
            // css/代表新建一个文件夹
            filename: 'css/[name].css',
            chunkFilename: 'css/[name]-chunk.css'
        })
    ]
}