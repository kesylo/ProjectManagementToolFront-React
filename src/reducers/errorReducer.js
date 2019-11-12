import {GET_ERRORS} from "../actions/types";
const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        /* if we have errors on the server */
        case GET_ERRORS:
            return action.payload;

        default:
            return state;
    }

}