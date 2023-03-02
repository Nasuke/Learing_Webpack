const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    // entry: './src/main.js',
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared' 
        },
        main: {
            import: './src/main.js',
            dependOn: 'shared' 
        },
        shared: 'axios',
    },
    devtool: false,
    output:{
        path: path.resolve(__dirname, './build'),
        // filename: 'bundle.js',
        // 不能将两个入口都打包到一个文件 所以用[name]来占位 生成两个文件
        filename: '[name].bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm', 'ts', 'jsx']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    devServer:{
        open: true,
        proxy: {
            '/api':{
                target: 'http://localhost:9000',
                pathRewrite:{
                    '^/api': ''
                }
            },
            changeOrigin: true
        },
    },
    optimization: {
        runtimeChunk: 'single'
    }
}