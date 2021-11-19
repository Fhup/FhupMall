import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import axios from 'axios'
// mock 模拟数据
// import './mock/index'


Vue.config.productionTip = false

// 原型 (将vue作为事件总线)
Vue.prototype.$bus = new Vue();
// this.$bus.$emit("itemimgclick")

// this.$bus.$on("itemimgclick",()=>{
//   this.bs && this.bs.finishPullUp()
// })

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')