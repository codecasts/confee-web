// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/Main.vue'
import router from './router'
import store from './vuex'
import Loader from './plugins/loader'

Vue.use(Loader)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  mounted () {
    Vue.$myLog(this)
  }
})
