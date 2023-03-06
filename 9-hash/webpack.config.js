const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'development',
    devtool: false,
    entry: {
        main: './src/main.js',
        index: './src/index.js'
    },
    output:{
        path: path.resolve(__dirname, './build'),
        filename: '[contenthash]-[name]-bundle.js',
        chunkFilename: '[contenthash]-[name].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[chunkhash]-bundle.css',
            chunkFilename: '[contenthash]-chunk.css'
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    }
}