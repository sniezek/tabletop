import {
    SET_FILTER_ACTIVE,
    SET_FILTER_LOCATION_RADIUS,
    SET_FILTER_SELECTED_TYPE,
    SET_FILTER_DATE,
    SET_FILTER_DATE_FROM,
    SET_FILTER_DATE_TO,
    ADD_FILTER_GAME,
    DELETE_FILTER_GAME
} from "./FilterConstants";
import { getCurrentDate } from "./FilterUtils";

export function locationReducer(state = {}, { type, payload }) {
    if (type === SET_FILTER_LOCATION_RADIUS) {
        return {
            ...state,
            radius: payload
        };
    } else if (type === SET_FILTER_ACTIVE && payload.id === "location") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}

export function gamesReducer(state = { selected: [] }, { type, payload }) {
    if (type === ADD_FILTER_GAME) {
        const name = payload.toLowerCase();

        if (state.selected.find(({ id }) => id === name)) {
            return state;
        }

        return {
            ...state,
            selected: [
                ...state.selected,
                {
                    id: name
                }
            ]
        };
    } else if (type === DELETE_FILTER_GAME) {
        const selected = state.selected;
        selected.splice(payload, 1);

        return {
            ...state,
            selected: [
                ...selected
            ]
        };
    } else if (type === SET_FILTER_ACTIVE && payload.id === "games") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}

export function typeReducer(state = { type: "sparring" }, { type, payload }) {
    if (type === SET_FILTER_SELECTED_TYPE) {
        return {
            ...state,
            type: payload
        };
    } else if (type === SET_FILTER_ACTIVE && payload.id === "type") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}

export function dateReducer(state = { active: true, from: getCurrentDate() }, { type, payload }) {
    if (type === SET_FILTER_DATE) {
        return {
            ...state,
            from: payload.from,
            to: payload.to
        };
    } else if (type === SET_FILTER_DATE_FROM) {
        return {
            ...state,
            from: payload
        };
    } else if (type === SET_FILTER_DATE_TO) {
        return {
            ...state,
            to: payload
        };
    } else if (type === SET_FILTER_ACTIVE && payload.id === "date") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}
