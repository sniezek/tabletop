import {
    SET_EVENTS
} from "./EventConstants";

export function eventsReducer(state = [], { type, payload }) {
    if (type === SET_EVENTS) {
        return payload;
    }

    return state;
}
