const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.json', 'wasm', 'ts','.jsx']
    },
    plugins: [new HtmlWebpackPlugin({
        template:'./index.html'
    })],
 
}