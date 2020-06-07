import {
  CREATE_CARD, DELETE_CARD, RENAME_CARD,
  ADD_USER_TO_CARD, REMOVE_USER_FROM_CARD,
  EDIT_DESCRIPTION_IN_CARD, FETCH_CARDS, DELETE_LIST, UPDATE_BOARD
} from "../constants/";
import {fetchData, requestData, requestDataError, requestDataSuccess} from "./data-request";
import API from "../../api";
import store from "../store";

export const createCard = (listId: number,
                           boardId: number,
                           title: string,
                           position: number) => {
  return async (dispatch: (arg0: { type: string }) => void) => {
    requestData();
    try {
      const response = await API({
        method: "post",
        url: `/board/${boardId}/card`,
        data: {position, title, list_id: listId},
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
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

export const renameCard = (cardId: number,
                           boardId: number,
                           listId: number,
                           title: string) => {
  return async (dispatch: (arg0: { type: string }) => void) => {
    requestData();
    try {
      const response = await API({
        method: "put",
        url: `/board/${boardId}/card/${cardId}`,
        data: {list_id: listId, title},
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
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

export const deleteCard = (boardId: number, cardId: number) => {
  return async (dispatch: (arg0: { type: string }) => void) => {
    requestData();
    try {
      const response = await API({
        method: "delete",
        url: `/board/${boardId}/card/${cardId}`,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
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


export const addUserToCard = (cardId: string, userId: string,
                              listId: string, boardId: string) => {
  return {
    type: ADD_USER_TO_CARD,
    payload: {cardId, userId, listId, boardId}
  }
}

export const deleteUserFromCard = (cardId: string, userId: string,
                                   listId: string, boardId: string) => {
  return {
    type: REMOVE_USER_FROM_CARD,
    payload: {cardId, userId, listId, boardId}
  }
}

export const editDescriptionInCard = (cardId: number,
                                      boardId: number,
                                      listId: number,
                                      description: string) => {
  return async (dispatch: (arg0: { type: string }) => void) => {
    requestData();
    try {
      const response = await API({
        method: "put",
        url: `/board/${boardId}/card/${cardId}`,
        data: {list_id: listId, description},
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${store.getState().users.token}`
        }
      })
      requestDataSuccess()
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
