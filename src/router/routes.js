import { routes as app } from '../app'

const root = [
  { path: '/', redirect: '/dashboard' }
]

export default [ ...root, ...app ]
