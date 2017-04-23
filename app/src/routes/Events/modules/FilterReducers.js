import {
    SET_FILTER_ACTIVE,
    SET_FILTER_LOCATION_RADIUS,
    SET_FILTER_TOURNAMENT_ACTIVE,
    SET_FILTER_SPARING_ACTIVE,
    SET_FILTER_DATE,
    SET_FILTER_DATE_FROM,
    SET_FILTER_DATE_TO
} from "./FilterConstants";
import getCurrentDate from "./FilterUtils";

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

export function gamesReducer(state = {}, { type, payload }) {
    if (type === SET_FILTER_ACTIVE && payload.id === "games") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}

export function typeReducer(state = {}, { type, payload }) {
    if (type === SET_FILTER_TOURNAMENT_ACTIVE) {
        return {
            ...state,
            tournament: payload
        };
    } else if (type === SET_FILTER_SPARING_ACTIVE) {
        return {
            ...state,
            sparing: payload
        };
    } else if (type === SET_FILTER_ACTIVE && payload.id === "type") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}

export function dateReducer(state = { from: getCurrentDate() }, { type, payload }) {
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
