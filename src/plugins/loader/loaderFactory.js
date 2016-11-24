const loaderFactory = context => {
  return {
    show () {
      context.$store.dispatch('showLoader')
    },
    hide () {
      context.$store.dispatch('hideLoader')
    }
  }
}

export default loaderFactory
