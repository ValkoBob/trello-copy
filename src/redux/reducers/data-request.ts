import {
    REQUEST_DATA, REQUEST_DATA_ERROR, REQUEST_DATA_SUCCESS
} from "../constants/";

type INITIAL_STATE_TYPE = {
    loading: boolean,
    error: null
}

const INITIAL_STATE: INITIAL_STATE_TYPE = {
    "loading": false,
    "error": null
};
export const dataRequest = (state = INITIAL_STATE, action: any): INITIAL_STATE_TYPE => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                loading: true
            }
        case REQUEST_DATA_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case REQUEST_DATA_ERROR:
            return  {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
