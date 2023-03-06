const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: 'production',
    optimization:{
        chunkIds: 'deterministic',
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks:{
            chunks: 'all',
            cacheGroups:{
                utils:{
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
        minimizer:[
            new TerserPlugin({
                terserOptions:{
                    compress:{
                        arguments: true,
                        unused: false
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
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name]_chunk.css'
        })
    ]
}