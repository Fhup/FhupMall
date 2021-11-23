import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'
// mock 模拟数据
// import './mock/index'


Vue.config.productionTip = false

// 原型 (将vue作为事件总线)
Vue.prototype.$bus = new Vue();
// this.$bus.$emit("itemimgclick")

// this.$bus.$on("itemimgclick",()=>{
//   this.bs && this.bs.finishPullUp()
// })

// 下载toast插件
Vue.use(toast)

//使用图片懒加载
Vue.use(LazyLoad, {
    loading: require('./assets/img/common/placeholder.png')
});

//解决300ms延迟
FastClick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')