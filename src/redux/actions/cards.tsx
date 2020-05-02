import {
    CREATE_CARD, DELETE_CARD, RENAME_CARD,
    ADD_USER_TO_CARD, REMOVE_USER_FROM_CARD,
    EDIT_DESCRIPTION_IN_CARD, FETCH_CARDS
} from "../constants/";
import API from "../../api";

export const fetchCards = () => {
    return (dispatch: any) => {
        return API.get(`/cards`)
            .then((response: { data: any; }) => {
                dispatch({
                    type: FETCH_CARDS,
                    payload: response.data
                })
            })
            // @ts-ignore
            .catch(error => {
                throw(error);
            });
    };
}

/*{
    "id": id,
    "list_id": listId,
    "board_id": boardId,
    "title": title,
    "users": [],
    "description": description,
    "slug": "",
    "archived": false,
    "created_at": new Date().getTime()
}*/

export const createCard = (newCard: any) => {
    return (dispatch: (arg0: any) => void) => {
        return API.post(`/cards`,newCard )
            .then(response => {
                dispatch({
                    type: CREATE_CARD,
                    payload: newCard
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const renameCard = (id: number, renamedCard: any) => {
    return (dispatch: (arg0: any) => void) => {
        return API.put(`/cards/${id}`,renamedCard )
            .then(response => {
                dispatch({
                    type: RENAME_CARD,
                    payload: renamedCard
                })
            })
            .catch(error => {
                throw(error);
            });
    };
}

export const deleteCard = (cardId: number, listId: number,
                           boardId: number) => {
    return (dispatch: (arg0: any) => void) => {
        return API.delete(`/cards/${cardId}`)
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
