//配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('views/home/Home')
const CateGory = () =>
    import ('views/category/CateGory')
const Cart = () =>
    import ('views/cart/Cart')
const ProFile = () =>
    import ('views/profile/ProFile')
const Detail = () =>
    import ('views/detail/Detail')


// Vue.use() 安装插件
Vue.use(Router);
// 对多次push进行处理
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

var routes = [{
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: CateGory
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/profile",
        component: ProFile
    },
    {
        path: "/detail/:iid",
        component: Detail,
    }
]

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes
})


//前置守卫(guard)
// router.beforeEach((to, from, next) => {
//     //从from到to 实现路由导航
//     document.title = to.matched[0].meta.title
//     next()
// })

//后置钩子(hook)
// router.afterEach((to, from) => {
//     // console.log('----------')
// })

export default router