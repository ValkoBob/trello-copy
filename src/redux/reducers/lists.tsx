import {
    CREATE_LIST, DELETE_LIST, RENAME_LIST
} from "../constants/";

const INITIAL_STATE = {
    "lists": []
};

export const lists = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case CREATE_LIST:
            return {
                ...state,
                lists: [
                    ...state.lists,
                    {
                        "id": action.payload.id,
                        "title": action.payload.title,
                        "position": action.payload.position,
                        "archived": false
                    }
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
    }
}
