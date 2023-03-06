
module.exports = {
    mode: 'development',
    devServer: {
        static: ['public', 'content'],
        port: 3000,
        compress: true,
        proxy:{
            '/api':{
                target: 'http://localhost:9000',
                pathRewrite:{
                    '^/api': ''
                },
                changeOrigin: true
            }
        },
        historyApiFallback: true
    }
}