import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/Supplier_choose.vue'
import { userRequest } from '../axios.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/loginaidc.vue')
  },
  {
    path: '/supplier_choose',
    name: 'Supplier_choose',
    component: () => import(/* webpackChunkName: "about" */ '../views/Supplier_choose.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // var isLogin = true
  // 檢查是否登入
  userRequest.post('/accounts/checklogin_api/')
    .then((resp) => {
      if (resp.data.status === 'pass') {
        next()
        if (to.path === '/login') {
          next('/')
        }
      } else {
        if (to.path !== '/login') {
          next('/login')
        } else {
          next()
        }
      }
    })
    .catch((error) => console.log(error))

  // if (isLogin) {
  //   next()
  //   if (to.path === '/login') {
  //     next('/')
  //   }
  // } else {
  //   console.log('not')
  //   if (to.path !== '/login') {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // }
})

export default router
