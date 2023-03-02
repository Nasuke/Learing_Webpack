const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        // 删除后再打包
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     // plugins: [
                    //     //     "@babel/plugin-transform-arrow-functions",
                    //     //     "@babel/plugin-transform-block-scoping"
                    //     // ]
                    //     presets: [
                    //         ["@babel/preset-env", {
                    //             // 会覆盖掉.browserslistrc
                    //             // 一般不这样使用 只会对js生效而css无效
                    //             // target: ">5%"
                    //         }]
                    //     ]
                    // }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: ['.ts','.json', '.tsx', '.jsx', '.wasm', '.js']
}