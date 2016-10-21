import * as types from './mutations-types'
import { postLogin } from '../services'

export const attemptLogin = (context, payload) => {
  return postLogin(payload.email, payload.password)
    .then(data => {
      context.commit(types.setToken, data.email)
      context.commit(types.setUser, data)
    })
}
