import axios from 'axios';
import {ADD_USER, DELETE_USER} from "../constants";
const apiUrl = 'http://localhost:3000/api/data-api';

export const addUser = (user: any) => {
    return {
        type: ADD_USER,
        payload: {user}
    }
};

export const deleteUser = (id: number) => {
    return (dispatch: (arg0: any) => void) => {
        return axios.get(`${apiUrl}/delete/${id}`)
            .then(response => {
                dispatch({
                    type: DELETE_USER,
                    payload: {id}
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};
