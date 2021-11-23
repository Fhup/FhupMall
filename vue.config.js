// 对文件的路径进行简化处理
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'components': '@/components',
                'common': '@/common',
                'assets': '@/assets',
                'network': '@/network',
                'mock': '@/mock',
                'views': '@/views',
            }
        }
    },
    // devServer: {
    //     proxy: {
    //         ["/api"]: {
    //             target: 'https://api.pingping6.com/tools/bullshit',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 ['^' + "/api"]: ''
    //             }
    //         }
    //     }
    // }
}