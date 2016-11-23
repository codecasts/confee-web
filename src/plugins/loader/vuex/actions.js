import * as types from './mutations-type'

export const showLoader = context => {
  context.commit(types.setShow, true)
}

export const hideLoader = context => {
  context.commit(types.setShow, false)
}
