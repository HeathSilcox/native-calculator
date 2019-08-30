import initialState from "../initialState";
import {CLEAR, DISPLAY_NUMBER, EQUAL} from "../Constants/action-types";

export default (state = initialState, action) => {
    if (action.type === DISPLAY_NUMBER) {
        return {
            ...state,
            expression: [...state.expression, action.payload],
            result: state.result + action.payload,
        };
    }

    if (action.type === CLEAR) {
        return {
            ...state,
            expression: [],
            result: ""
        };
    }

    if (action.type === EQUAL) {
        return {
            ...state,
            result: eval(state.expression.join('')),
        }
    }

    return state;
}