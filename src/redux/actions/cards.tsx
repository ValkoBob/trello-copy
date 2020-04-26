import axios from 'axios';
import {
    CREATE_CARD, DELETE_CARD, RENAME_CARD,
    ADD_USER_TO_CARD, REMOVE_USER_FROM_CARD,
    EDIT_DESCRIPTION_IN_CARD
} from "../constants/";

const apiUrl = 'http://localhost:3000/api1.json';

export const createCard = (title: string, listId: number,
                           boardId: number, description: string) => {
    return {
        type: CREATE_CARD,
        payload: {title, listId, boardId, description},
    }
};

export const renameCard = (title: string, id: number,
                           listId: number, boardId: number) => {
    return {
        type: RENAME_CARD,
        payload: {title, id, listId, boardId}
    }
}

export const deleteCard = (cardId: number, listId: number,
                           boardId: number) => {
    return (dispatch: (arg0: any) => void) => {
        return axios.delete(`${apiUrl}${cardId}`)
            .then(response => {
                dispatch({
                    type: DELETE_CARD,
                    payload: {cardId, listId, boardId}
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const addUserToCard = (cardId: number, userId: number,
                              listId: number, boardId: number) => {
    return {
        type: ADD_USER_TO_CARD,
        payload: {cardId, userId, listId, boardId}
    }
}

export const deleteUserFromCard = (cardId: number, userId: number,
                                   listId: number, boardId: number) => {
    return {
        type: REMOVE_USER_FROM_CARD,
        payload: {cardId, userId, listId, boardId}
    }
}

export const editDescriptionInCard = (boardId: number, listId: number,
                                      cardId: number, newDescription: string) => {
    return {
        type: EDIT_DESCRIPTION_IN_CARD,
        payload: {boardId, listId, cardId, newDescription}
    }
}
