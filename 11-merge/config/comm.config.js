const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const devConfig = require('./dev.config')
const prodConfig = require('./prod.config')

const getCommonConfig = function (isProduction) {
    return {
        entry: './src/main.js',
        output: {
            clean: true,
            path: path.resolve(__dirname, '../build'),
            filename: 'js/[name]-bundle.js',
            chunkFilename: 'js/[name]_chunk.js'
        },
        resolve: {
            extensions: ['.js', '.json', '.wasm', '.jsx', 'ts']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.ts$/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
        ]
    }
}



// webpack允许导出一个函数
module.exports = function (env) {
    const isProduction = env.production
    let mergeConfig = isProduction ? prodConfig : devConfig
    return merge(getCommonConfig(isProduction), mergeConfig)
}
