import {
  FETCH_BOARDS,
  DELETE_BOARD,
  CREATE_BOARD,
  RENAME_BOARD,
  FETCH_ONE_BOARD,
  UPDATE_BOARD
} from "../constants/";

type INITIAL_STATE_TYPE = {
  boards: {
    id: number;
    title: string;
    users: number[];
    lists: {
      [id: number]: {
        position: number;
        title: string;
        id?: number;
        cards?: {
          [id: number]: {
            id?: number;
            title: string;
            description?: string;
            users?: number[];
            created_at?: number;
            position: number;
          }
        }
      }
    }
  }[],
  update: boolean
}

const INITIAL_STATE: INITIAL_STATE_TYPE = {
  "boards": [],
  update: false
};

export const boards = (state = INITIAL_STATE, action: any): INITIAL_STATE_TYPE => {
  switch (action.type) {
    case FETCH_BOARDS:
      return {
        ...state,
        boards: action.payload.boards
      }
    case FETCH_ONE_BOARD:
      return {
        ...state,
        boards: state.boards.map(board => {
          if (board.id === action.payload.id) {
            return {...board, ...action.payload.data}
          }
          return board
        })
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
          action.payload
        ]
      }
    case RENAME_BOARD:
      return {
        ...state,
        boards: state.boards.map((board) => {
          if (board.id === action.payload.id) {
            board.title = action.payload.title
            return board;
          }
          return board;
        })
      }
    case UPDATE_BOARD:
      return {
        ...state,
        update: !state.update
      }
    default:
      return state;
  }
}
