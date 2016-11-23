// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/Main.vue'
import router from './router'
import store from './vuex'
import Loader from './plugins/loader'

Vue.use(Loader, store)

/* eslint-disable no-new */
new Vue({
  data: {
    name: 'vinicius'
  },
  router,
  store,
  el: '#app',
  render: h => h(App),
  mounted () {
    this.$loader.show()
    setTimeout(() => {
      this.$loader.hide()
    }, 1000)
  }
})
