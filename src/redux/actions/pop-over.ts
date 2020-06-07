import {CHECK_ONCLICK_BOARD, POP_OVER_CARD, POP_OVER_CARD_EDITOR, POP_OVER_LIST_MENU} from "../constants";
import {ICards} from "../../types";


export const popOverListMenu = ( position: number = 1, currentListId: number= 1) => {
    return {
        type: POP_OVER_LIST_MENU,
        payload: {position, currentListId}
    }
}

export const popOverCardEditor = (data?: any) => {
    return {
        type: POP_OVER_CARD_EDITOR,
        payload: {data}
    }
}

export const popOverCard = (data?: ICards) => {
    return {
        type: POP_OVER_CARD,
        payload: {data}
    }
}

export const checkOnClickBoard = (check: boolean) => {
    return {
        type: CHECK_ONCLICK_BOARD,
        payload: {check}
    }
}
