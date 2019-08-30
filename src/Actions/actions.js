import {
    ADDITION,
    CLEAR,
    DISPLAY_NUMBER,
    DIVISION,
    EQUAL,
    MULTIPLICATION,
    SUBSTRACTION
} from "../Constants/action-types";


export const displayNumber = payload => {
    return {type: DISPLAY_NUMBER, payload};
};

export const clear = payload => {
    return {type: CLEAR, payload};
};

export const addition = payload => {
    return {type: ADDITION, payload};
};

export const substraction = payload => {
    return {type: SUBSTRACTION, payload};
};

export const division = payload => {
    return {type: DIVISION, payload};
};

export const multiplication = payload => {
    return {type: MULTIPLICATION, payload};
};

export const equal = payload => {
    return {type: EQUAL, payload};
};