import {POP_OVER_LIST_MENU} from "../constants";


export const popOverListMenu = ( position: number = 1, currentListId: number = 1) => {
    return {
        type: POP_OVER_LIST_MENU,
        payload: {position, currentListId}
    }
}