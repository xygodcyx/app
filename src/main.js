import Vue from 'vue'
import App from './App.vue'
// 注册全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
// 引入router
import router from './router'
// 引入store
import store from './store'
// 引入mock
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
