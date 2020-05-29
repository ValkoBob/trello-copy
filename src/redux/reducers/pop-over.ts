import {
    CHECK_ONCLICK_BOARD,
    ONCLICK_BOARD_MENU,
    ONCLICK_CARD_CREATOR,
    ONCLICK_LIST_CREATOR, POP_OVER_CARD_EDITOR,
    POP_OVER_LIST_MENU
} from "../constants";


type INITIAL_STATE_TYPE = {
    pop_over: boolean,
    position: number,
    currentListId: string | null,
    isActiveBoardMenu: boolean,
    isActiveListCreator: boolean,
    isActiveCardCreator: boolean,
    isActiveCardEditor: boolean,
    data: any
}

const INITIAL_STATE: INITIAL_STATE_TYPE = {
    "pop_over": false,
    "position": 1,
    "currentListId": null,
    isActiveBoardMenu: false,
    isActiveListCreator: false,
    isActiveCardCreator: false,
    isActiveCardEditor: false,
    data: {}
};

export const popOver = (state = INITIAL_STATE, action: any): INITIAL_STATE_TYPE => {
    switch (action.type) {
        case POP_OVER_LIST_MENU:
            return {
                ...state,
                pop_over: !state.pop_over,
                position: action.payload.position,
                currentListId: action.payload.currentListId
            }
        case CHECK_ONCLICK_BOARD:
            return {
                ...state,
                isActiveBoardMenu: false,
                isActiveListCreator: false,
                isActiveCardCreator: false
            }
        case ONCLICK_BOARD_MENU:
            return {
                ...state,
                isActiveBoardMenu: action.payload.isActiveBoardMenu
            }
        case ONCLICK_LIST_CREATOR:
            return {
                ...state,
                isActiveListCreator: action.payload.isActiveListCreator
            }
        case ONCLICK_CARD_CREATOR:
            return {
                ...state,
                isActiveCardCreator: action.payload.isActiveCardCreator
            }
        case POP_OVER_CARD_EDITOR:
            return {
                ...state,
                isActiveCardEditor: !state.isActiveCardEditor,
                data: action.payload.data
            }
        default:
            return state
    }
}