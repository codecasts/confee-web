import { isEmpty } from 'lodash'

export const isLogged = ({ token }) => !isEmpty(token)
