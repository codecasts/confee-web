const install = Vue => {
  Object.defineProperty(Vue.prototype, '$loader', {
    get () {
      return {
        show: () => console.log({show: this}),
        hide: () => console.log({hide: this})
      }
    }
  })
}

// this.$loader.show()
// this.$loader.hide()

export default { install }
