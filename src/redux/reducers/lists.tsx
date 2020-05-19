import {
    CREATE_LIST, DELETE_LIST, FETCH_LISTS, RENAME_LIST
} from "../constants/";

type INITIAL_STATE_TYPE = {
    lists: {
        "id": number,
        "board_id": number,
        "title": string,
        "position": number,
        "archived": boolean
    }[];
}

const INITIAL_STATE : INITIAL_STATE_TYPE = {
    "lists": []
};

export const lists = (state = INITIAL_STATE, action: any) : INITIAL_STATE_TYPE => {
    switch (action.type) {
        case FETCH_LISTS:
            return  {
                ...state,
                lists: action.payload
            }
        case CREATE_LIST:
            return {
                ...state,
                lists: [
                    ...state.lists,
                    action.payload
                ]
            }
        case DELETE_LIST:
            return {
                ...state,
                // @ts-ignore
                lists: state.lists.filter(list => list.id !== action.payload.id)
            }
        case RENAME_LIST:
            return {
                ...state,
                lists: state.lists.map((list) => {
                    // @ts-ignore
                    if (list.id === action.payload.id) {
                        // @ts-ignore
                        list.title = action.payload.newTitle;
                        return list;
                    }
                    return list;
                })
            }
        default:
            return state;
    }
}
