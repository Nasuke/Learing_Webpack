const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[id]-bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        // 
        chunkIds: 'deterministic',
        // 可以传入多个Terser 
        minimize: true,
        minimizer: [
            // js代码压缩
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        arguments: true,
                        unused: false
                    },
                    mangle: true,
                    keep_fnames: true
                }
            }),
            // css压缩
            new CssMinimizerPlugin({
                parallel: true
            })
        ]
    }
}