import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'

//饿了么
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//vant
import Vant from 'vant';
import 'vant/lib/index.css';

// mock 模拟数据
// import './mock/index'


Vue.config.productionTip = false //关闭生产提示

// 原型 (将vue作为事件总线)
Vue.prototype.$bus = new Vue();
// this.$bus.$emit("itemimgclick")

// this.$bus.$on("itemimgclick",()=>{
//   this.bs && this.bs.finishPullUp()
// })

// 下载toast插件
Vue.use(toast)
Vue.use(ElementUI);
Vue.use(Vant);

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