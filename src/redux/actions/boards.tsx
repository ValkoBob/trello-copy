import axios from 'axios';
import {
    FETCH_BOARDS, DELETE_BOARD, CREATE_BOARD
} from "../constants/";

const apiUrl = 'http://localhost:3000/api1.json';

export const fetchAllBoards = () => {
    return (dispatch: any) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch({
                    type: FETCH_BOARDS,
                    payload: response.data
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const deleteBoard = (id: number) => {
    return (dispatch: (arg0: any) => void) => {
        return axios.delete(`${apiUrl}/board/${id}`)
            .then(response => {
                dispatch({
                    type: DELETE_BOARD,
                    payload: {id}
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};

// @ts-ignore
export const createBoard = ({id, title}) => {
    return (dispatch: (arg0: any) => void) => {
        return axios.post(`${apiUrl}/add`, {title, id})
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

