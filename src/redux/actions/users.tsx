import {LOGIN_USER, SIGNUP_USER, USER_IN_LOCAL} from "../constants";
import {fetchData} from "./data-request";

export const loginUser = (email: string, password: string) =>
    fetchData("post", `/login`, LOGIN_USER, {email, password});

export const signupUser = (email: string, password: string) =>
    fetchData("post", `/user`, SIGNUP_USER, {email, password});

export const userInLocal = (token: number) => {
  return {
    type: USER_IN_LOCAL,
    payload: token
  }
}

