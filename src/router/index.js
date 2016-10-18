import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../vuex'

Vue.use(VueRouter)

const router = new VueRouter({ routes, linkActiveClass: 'active' })

router.beforeEach((to, from, next) => {
  if (to.path.indexOf('/auth') === -1) {
    if (store.getters.isLogged) {
      next()
    } else {
      next('/auth')
    }
    return
  }

  next()
})

export default router
