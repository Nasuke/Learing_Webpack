const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devtool: false,
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        // 单独对分包的文件进行命名
        chunkFilename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm', 'ts', 'jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                pathRewrite: {
                    '^/api': ''
                }
            },
            changeOrigin: true
        },
    },
}