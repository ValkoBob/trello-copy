import {
    FETCH_BOARDS, DELETE_BOARD, CREATE_BOARD
} from "../constants/";
import API from "../../api";


export const fetchBoards = () => {
    console.log("fetched...");
    return (dispatch: any) => {
        API.get(`/board`)
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
        return API.delete(`/board/${id}`)
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


export const createBoard = (id: number, title: string, background: string) => {
    return (dispatch: (arg0: any) => void) => {
        return API.post(`/board`, {id, title, background})
            .then(response => {
                dispatch({
                    type: CREATE_BOARD,
                    payload: {
                        id,
                        title,
                        background
                    }
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};

