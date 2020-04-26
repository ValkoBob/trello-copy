import axios from 'axios';
import {
    CREATE_LIST, DELETE_LIST, RENAME_LIST
} from "../constants/";
const apiUrl = 'http://localhost:3000/api/data-api';

export const createList = (title: string, position: number) => {
    return {
        type: CREATE_LIST,
        payload: {title, position}
    }
};

export const deleteList = (id: number) => {
    return (dispatch: (arg0: any) => void) => {
        return axios.delete(`${apiUrl}${id}`)
            .then(response => {
                dispatch({
                    type: DELETE_LIST,
                    payload: {id}
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const renameList = (newTitle: string, id: number) => {
    return {
        type: RENAME_LIST,
        payload: {newTitle, id}
    }
}
