import {
    FETCH_BOARDS, DELETE_BOARD, CREATE_BOARD
} from "../constants/";

type INITIAL_STATE_TYPE = {
    boards: Array<{
        id: number,
        title: string,
        _background: string
    }>;
}

const INITIAL_STATE: INITIAL_STATE_TYPE = {
    "boards": []
};

export const boards = (state = INITIAL_STATE, action: any): INITIAL_STATE_TYPE => {
    console.log(action.payload)
    switch (action.type) {
        case FETCH_BOARDS:
            return {
                ...state,
                boards: action.payload
            }
        case DELETE_BOARD:
            return {
                ...state,
                boards: state.boards.filter((board) => {
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
