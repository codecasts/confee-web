const registerStore = store => {
  store.registerModule('CODECASTS_LOADER', {
    state: {
      show: false
    }
  })
}

export default registerStore
