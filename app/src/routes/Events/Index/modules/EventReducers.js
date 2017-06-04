import {
    SET_EVENTS,
    SET_EVENT
} from "./EventConstants";

export function eventsReducer(state = [], { type, payload }) {
    if (type === SET_EVENTS) {
        return [...payload];
    }

    return state;
}

export function eventReducer(state = null, { type, payload }) {
    if (type === SET_EVENT) {
        return {
            ...payload
        };
    }

    return state;
}
