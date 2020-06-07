import {REQUEST_DATA, REQUEST_DATA_ERROR, REQUEST_DATA_SUCCESS} from "../constants";
import API from "../../api";
import store from "../store";

export const requestData = () => {
  return {
    type: REQUEST_DATA
  }
}

export const requestDataSuccess = () => {
  return {
    type: REQUEST_DATA_SUCCESS
  }
}

export const requestDataError = (error: string) => {
  return {
    type: REQUEST_DATA_ERROR,
    payload: error
  }
}

type Method =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
    | 'link' | 'LINK'
    | 'unlink' | 'UNLINK'

export const fetchData = (methodType: Method,
                          urlAddress: string,
                          typeConstant: string,
                          inputData: any) => {
  console.log("At the beginning...")
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    requestData();
    console.log("fetched...")
    try {
      const response = await API({
        method: methodType, url: urlAddress, data: inputData,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
      console.log(response)
      dispatch({
        type: typeConstant,
        payload: response.data
      });
      return response.data
    } catch (error) {
      requestDataError(error)
      console.log(error)
      throw(error);
    }
  };
}
