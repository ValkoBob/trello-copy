import {
    CREATE_CARD, DELETE_CARD, RENAME_CARD,
    ADD_USER_TO_CARD, REMOVE_USER_FROM_CARD,
    EDIT_DESCRIPTION_IN_CARD, FETCH_CARDS, FETCH_BOARDS, CREATE_BOARD, RENAME_BOARD, DELETE_BOARD
} from "../constants/";
import {fetchData} from "./data-request";


export const fetchCards = () =>
    fetchData("get", `/card`, FETCH_CARDS, null)

export const createCard = (listId: number,
                           boardId: number,
                           title: string,
                           archived: boolean) =>
    fetchData("post", `/card`, CREATE_CARD, {listId, boardId, title, archived})

export const renameCard = (cardId: number,
                           newData: {
                               id: number,
                               title: string,
                               boardId: number,
                               listId: number
                           }) =>
    fetchData("put", `/card/${cardId}`, RENAME_CARD, newData)

export const deleteCard = (id: number) =>
    fetchData("delete", `/board/${id}`, DELETE_CARD, null);


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
