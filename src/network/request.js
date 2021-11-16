import axios from 'axios'
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    });
    // 2.请求拦截器
    instance.interceptors.request.use(config => {
        // console.log(config);
        //2.1.拦截之后进行config的修改
        //2.2.加载请求的dialog(转圈圈)
        //2.3.登录时(没有token),重新登录

        return config
    }, err => {
        // console.log(err);
    });
    // 3.响应拦截器
    instance.interceptors.response.use(res => {
        // console.log(res);
        //3.1.对结果进行处理(和请求拦截的一些处理)
        return res.data
    }, err => {
        // console.log(err);
    })



    // 4.发送网络请求
    return instance(config); // instance()就是个promise对象
}