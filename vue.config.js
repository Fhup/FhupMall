// 对文件的路径进行简化处理
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'components': '@/components',
                'common': '@/common',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}