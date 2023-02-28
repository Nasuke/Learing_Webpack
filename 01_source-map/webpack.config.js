const path = require('path')

module.exports = {
    mode: 'development',
    // 1.false
    // 2.none - pro
    // 3.eval - dev
    // 4.source-map - rec pro

    // 不常见: 
    // 1.eval-source-map(dev)  添加到eval函数后 socuceURL=[module]
    // 2.inline-source-map(dev) 添加到文件后面
    // 3.cheap-source-map(dev) 低开销 错误提示不会定位到具体列 
    // 4.cheap-module-source-map(dev) 与前者类似但是对loader的source-map处理更好(比如还原源代码时空格不会被删除)
    // 5.hidden-source-map(pro) 生成文件但不引用 如需使用自己添加
    // 6.nosources-source-map(pro) 会生成并引用文件 能看到具体错误位置(列) 但是没有还原源代码
    devtool: 'cheap-source-map', 
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    }
}