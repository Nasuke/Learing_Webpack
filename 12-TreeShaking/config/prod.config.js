const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const {PurgeCSSPlugin}  = require('purgecss-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    devtool: false,
    optimization: {
        chunkIds: 'deterministic',
        // 导入模块时分析哪些函数被使用哪些没有
        // usedExports: true,
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                utils: {
                    test: /utils/,
                    filename: "js/[id]_utile.js"
                },
                vendors: {
                    test: /node_modules/,
                    filename: 'js/[id]_vendors.js'
                }
            }
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    compress: {
                        arguments: true,
                        unused: true
                    },
                    mangle: true,
                    keep_fnames: true
                }
            }),
            new CssMinimizerPlugin({
                parallel: true
            })

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name]_chunk.css'
        }),
        // css进行treeshaking
        new PurgeCSSPlugin({
            paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`, {nodir: true}),
            safelist: function () {
                return {
                    standard: ['body']
                }
            }
        }),
        // 作用域提升 但是需要注意模块间的冲突问题
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}