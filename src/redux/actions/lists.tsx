import {
    UPDATE_BOARD
} from "../constants/";
import {requestData, requestDataError, requestDataSuccess} from "./data-request";
import {ILists} from "../../types";
import API from "../../api";
import store from "../store";


export const createList = (boardId: number, title: string, position: number) => {
    return async (dispatch: (arg0: { type: string }) => void) => {
        requestData();
        try {
            const response = await API({
                method: "post", url: `/board/${boardId}/list`, data: {title, position},
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

export const deleteList = (boardId: number, listId: number) => {
    return async (dispatch: (arg0: { type: string }) => void) => {
        requestData();
        try {
            const response = await API({
                method: "delete", url: `/board/${boardId}/list/${listId}`,
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
};

export const renameList = (boardId: number, id: number, position: number, title: string) =>{
    return async (dispatch: (arg0: { type: string }) => void) => {
        requestData();
        try {
            const response = await API({
                method: "put", url: `/board/${boardId}/list/${id}`, data: {position, title},
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
