import { routes as dashboard } from '../modules/dashboard'
import { routes as auth } from '../modules/auth'

const root = [
  { path: '/', redirect: '/dashboard' }
]

export default [ ...root, ...dashboard, ...auth ]
