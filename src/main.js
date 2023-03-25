import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 注册全局组件
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name, TypeNav)

Vue.use(VueRouter)
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
