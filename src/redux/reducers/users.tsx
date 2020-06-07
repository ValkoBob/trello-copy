import {LOGIN_USER, SIGNUP_USER, USER_IN_LOCAL} from "../constants";

const INITIAL_STATE: any = {
  "users": [],
  "isAuthenticated": false,
  'token': undefined
};

export const users = (state = INITIAL_STATE, action: any)=> {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        // @ts-ignore
        token: action.payload.token,
        isAuthenticated: true
      }
    case SIGNUP_USER:
      return {
        ...state,
        // @ts-ignore
        users: state.users.filter(user => user.id !== action.payload.id)
      }
    case USER_IN_LOCAL:
      return {
          ...state,
        token: action.payload,
        isAuthenticated: true
      }
    default:
      return state;
  }
}
