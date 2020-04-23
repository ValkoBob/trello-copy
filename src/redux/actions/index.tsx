import axios from 'axios';
import {
    FETCH_BOARDS, DELETE_BOARDS,
    CREATE_BOARD, ADD_USERS, DELETE_USERS, ADD_LISTS,
    DELETE_LISTS, ADD_CARDS, DELETE_CARDS
} from "../constants/";

const apiUrl = 'http://localhost:3000/api/data-api';

export const fetchABoards = () => {
    return (dispatch: (arg0: any) => void) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchBoardsSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchBoardsSuccess = (data: any) => {
    return {
        type: FETCH_BOARDS,
        data
    }
};

export const deleteBoards = (id: number) => {
    return (dispatch: (arg0: any) => void) => {
        return axios.get(`${apiUrl}/delete/${id}`)
            .then(response => {
                dispatch(deleteBoardsSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const deleteBoardsSuccess = (id: number) => {
    return {
        type: DELETE_BOARDS,
        payload: {id}
    }
};

// @ts-ignore
export const createBoard = ({ id, title}) => {
    return (dispatch: (arg0: any) => void) => {
        return axios.post(`${apiUrl}/add`, {title, id})
            .then(response => {
                dispatch(createBoardSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

// @ts-ignore
export const createBoardSuccess = ({id, title}) => {
    return {
        type: CREATE_BOARD,
        payload: {
            id,
            title,
        }
    }
};

export const addUsers = () => {
    return {
        type: ADD_USERS,
    }
};

export const deleteUsers = () => {

};

export const addLists = () => {

};

export const deleteLists = () => {

};

export const addCards = () => {

};

export const deleteCards = () => {

};

