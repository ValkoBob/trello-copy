import {
  FETCH_BOARDS, DELETE_BOARD, CREATE_BOARD, RENAME_BOARD, FETCH_ONE_BOARD, UPDATE_BOARD
} from "../constants/";
import {fetchData, requestData, requestDataError, requestDataSuccess} from "./data-request";
import API from "../../api";
import store from "../store";

export const fetchBoards = () =>
    fetchData("get", `/board`, FETCH_BOARDS, null)

export const fetchOneBoard = (id: number) => {
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    requestData();
    try {
      const response = await API({
        method: "get", url: `/board/${id}`,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
      dispatch({
        type: FETCH_ONE_BOARD,
        payload: {data: response.data, id}
      });
    } catch (error) {
      requestDataError(error)
      console.log(error)
      throw(error);
    }
  };
}

export const deleteBoard = (id: number) => {
  console.log("At the beginning...")
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    requestData();
    console.log("fetched...")
    try {
      const response = await API({
        method: "delete", url: `/board/${id}`,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
      console.log(response)
      dispatch({
        type: DELETE_BOARD,
        payload: {id}
      });
    } catch (error) {
      requestDataError(error)
      console.log(error)
      throw(error);
    }
  };
}

export const createBoard = (title: string) =>{
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    requestData();
    console.log("fetched...")
    try {
      const response = await API({
        method: "post", url: `/board`, data: {title},
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
      console.log(response)
      dispatch({
        type: CREATE_BOARD,
        payload: {id: response.data.id, title}
      });
      return {id: response.data.id, title}
    } catch (error) {
      requestDataError(error)
      console.log(error)
      throw(error);
    }
  };
}

export const renameBoard = (boardId: number,
                            title: string) => {
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    requestData();
    console.log("fetched...")
    try {
      const response = await API({
        method: "put", url: `/board/${boardId}`, data: {title},
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
      console.log(response)
      dispatch({
        type: RENAME_BOARD,
        payload: {id: boardId, title}
      });
    } catch (error) {
      requestDataError(error)
      console.log(error)
      throw(error);
    }
  };
}

export const rewriteBoard = (boardId: number, data: any) => {
  return async (dispatch: (arg0: { type: string }) => void) => {
    requestData();
    console.log("fetched...")
    try {
      const response = await API({
        method: "put", url: `/board/${boardId}`, data: {data},
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
      console.log(response)
      dispatch({
        type: UPDATE_BOARD
      });
    } catch (error) {
      requestDataError(error)
      console.log(error)
      throw(error);
    }
  };
}

