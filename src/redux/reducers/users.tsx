import {ADD_USER, DELETE_USER} from "../constants";

const INITIAL_STATE = {
    "users": []
};

export const users = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                // @ts-ignore
                users: state.users.push(action.payload.id)
            }
        case DELETE_USER:
            return {
                ...state,
                // @ts-ignore
                users: state.users.filter(user => user.id !== action.payload.id)
            }
        default:
            return state;
    }
}
