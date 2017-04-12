import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller.vue'
import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)
// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
// vue-router1.x的写法
let app = Vue.extend(App)

let router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})

router.start(app, '#app')
router.go('/goods')
// // vue-router2.x 写法
// // const app = Vue.extend(App)
// // 定义路由
// const routes = [
//   {path: '/goods', component: goods}
// ]

// // 创建router实例，然后'router'配置
// const router = new VueRouter({
//   routes
// })
// // 创建和挂载根实例
// /* eslint-disable no-new */
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

