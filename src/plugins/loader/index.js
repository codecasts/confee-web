import loaderFactory from './loaderFactory'

const install = Vue => {
  Object.defineProperty(Vue.prototype, '$loader', {
    get () {
      return loaderFactory(this)
    }
  })
}

// this.$loader.show()
// this.$loader.hide()

export default { install }
