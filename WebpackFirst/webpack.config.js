// webpack.config.js
const path = require('path')
module.exports = {
    // 入口：表示要使用webpack打包哪个文件
    entry: path.join(__dirname, './index.js'),
    // 出口：输出文件的相关配置
    output: {
        // 指定打包好的文件，输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        // 指定输出的文件名称
        filename: 'bundle.js'
    }
}

