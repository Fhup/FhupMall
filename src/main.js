import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import axios from 'axios'
// mock 模拟数据
// import './mock/index'


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')