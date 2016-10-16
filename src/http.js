import { defaults } from 'lodash'
import axios from 'axios'

export const createClient = (options = {}) => axios.create(defaults({}, options))

export default createClient()
