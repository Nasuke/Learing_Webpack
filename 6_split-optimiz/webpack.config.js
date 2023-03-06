const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devtool: false,
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[id]-bundle.js',
        // 单独对分包的文件进行命名
        chunkFilename: '[id]_chunk.js',
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
    optimization: {
        chunkIds: 'named',
        runtimeChunk: true,
        splitChunks:{
            chunks: 'all',
            minSize: 0, // 配小一点utils就生效了
            cacheGroups:{
                vendors:{
                    test: /node_modules/,
                    filename: "ab_vendors.js"
                },
                router:{
                    test: /router/,
                    filename: "[id]-router.js"
                }
            }
        }
    }
}