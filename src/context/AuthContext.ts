import {createContext} from 'react'

// tslint:disable-next-line:no-empty
function noop(token: any) {}

export const AuthContext = createContext({
  token: undefined,
  login: noop,
  logout: noop
})
