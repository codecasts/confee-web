import * as types from './mutations-types'

export default {
  [types.setUser] (state, user) {
    state.user = user
  },
  [types.setToken] (state, token) {
    state.token = token
  }
}
