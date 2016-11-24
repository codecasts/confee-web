import loaderFactory from './loaderFactory'
import registerStore from './registerStore'
import PageLoader from './components/page-loader'

const install = (Vue, store) => {
  Vue.component('PageLoader', PageLoader)

  registerStore(store)

  Object.defineProperty(Vue.prototype, '$loader', {
    get () {
      return loaderFactory(this)
    }
  })
}

// this.$loader.show()
// this.$loader.hide()

export default { install }
