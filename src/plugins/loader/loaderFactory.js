const loaderFactory = context => {
  return {
    show () {
      console.log({ show: this })
    },
    hide () {
      console.log({ hide: this })
    }
  }
}

export default loaderFactory
