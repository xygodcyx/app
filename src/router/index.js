import Vue, { reactive } from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

//重写push和replace方法

VueRouter.prototype.push = function push(location, resolve, reject) {
    if (resolve, reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function replace(location, resolve, reject) {
    if (resolve, reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { isShowFooter: true }
        },
        {
            name: 'search',
            path: '/search/:k?',
            component: Search,
            meta: { isShowFooter: true },
            // props: true
            // // props: { k: this.$router.params.k }
            props($route) {
                return {
                    keyword: $route.query.keyword,
                    k: $route.params.k
                }
            }
        }, {
            path: '/login',
            component: Login,
            meta: { isShowFooter: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { isShowFooter: false }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})