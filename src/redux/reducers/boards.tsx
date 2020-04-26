import {
    FETCH_BOARDS, DELETE_BOARD, CREATE_BOARD
} from "../constants/";

const INITIAL_STATE = {
    "boards": [],
    "cards": [],
    "users": [],
    "lists": []
};

export const boards = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case FETCH_BOARDS:
            return {
                ...state,
                boards: [
                    ...state.boards,
                    action.payload.board
                ],
                cards: [
                    ...state.cards,
                    action.payload.card
                ],
                users: [
                    ...state.users,
                    action.payload.user
                ],
                lists: [
                    ...state.lists,
                    action.payload.list
                ]
            }
        case DELETE_BOARD:
            return {
                ...state,
                boards: state.boards.filter((board) => {
                    // @ts-ignore
                    return board.id !== action.payload.id
                })
            }
        case CREATE_BOARD:
            return {
                ...state,
                boards: [
                    ...state.boards,
                    {
                        "id": action.payload.id,
                        "title": action.payload.title,
                        "_background": ""
                    }
                ]
            }
        default:
            return state;
    }
}
