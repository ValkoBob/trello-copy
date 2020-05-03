import {
    FETCH_BOARDS, DELETE_BOARD, CREATE_BOARD
} from "../constants/";
import API from "../../api";


export const fetchBoards = () => {
    console.log("fetched...");
    return (dispatch: any) => {
        API.get(`/boards`)
            .then(response => {
                dispatch({
                    type: FETCH_BOARDS,
                    payload: response.data
                });
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const deleteBoard = (id: number) => {
    return (dispatch: any) => {
        return API.delete(`/boards/${id}`)
            .then(response => {
                dispatch({
                    type: DELETE_BOARD,
                    payload: id
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};

// @ts-ignore
export const createBoard = (id, title, background) => {
    return (dispatch: (arg0: any) => void) => {
        return API.post(`/boards`, {id, title, background})
            .then(response => {
                dispatch({
                    type: CREATE_BOARD,
                    payload: {
                        id,
                        title,
                    }
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};

