import store from '../vuex'

const isAuthRoute = route => route.path.indexOf('/auth') !== -1
const isLogged = () => store.getters.isLogged

export default (to, from, next) => {
  if (!isAuthRoute(to) && !isLogged()) {
    next('/auth')
  } else {
    next()
  }
}
