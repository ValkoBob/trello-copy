import {POP_OVER_LIST_MENU} from "../constants";


type INITIAL_STATE_TYPE = {
    pop_over: boolean,
    position: number,
    currentListId: number | null
}

const INITIAL_STATE: INITIAL_STATE_TYPE = {
    "pop_over": false,
    "position": 1,
    "currentListId": null
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
        default:
            return state
    }
}