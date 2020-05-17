import {
    CREATE_LIST, DELETE_LIST, FETCH_LISTS, RENAME_LIST
} from "../constants/";
import API from "../../api";

// tslint:disable-next-line:variable-name
export const fetchLists = (id: number) => {
    return (dispatch: (arg0: any) => void) => {
         API.get(`/list/${{board_id: id}}`)
            .then(response => {
                console.log(response)
                dispatch({
                    type: FETCH_LISTS,
                    payload: response.data
                })
            })
            .catch(error => {
                throw(error);
            });
    };
}

export const createList = (title: string, position: number) => {
    return {
        type: CREATE_LIST,
        payload: {title, position}
    }
};

export const deleteList = (id: number) => {
    return (dispatch: (arg0: any) => void) => {
        API.delete(`${id}`)
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
