import module from './vuex'

const registerStore = store => {
  store.registerModule('CODECASTS_LOADER', { ...module })
}

export default registerStore
