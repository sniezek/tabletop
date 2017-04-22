// ------------------------------------
// Constants
// ------------------------------------
export const SET_DATE = "SET_DATE";
export const SET_ACTIVE = "SET_ACTIVE";
export const SET_TYPE = "SET_TYPE";
export const SET_GAMES = "SET_GAMES";
export const SET_LOCATION = "SET_LOCATION";

export function getCurrentDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();

    if (day < 10) {
        day = `0${day}`;
    }

    if (month < 10) {
        month = `0${month}`;
    }

    return `${day}-${month}-${year}`;
}

export function locationReducer(state = {}, { type, payload }) {
    if (type === SET_LOCATION) {
        return {
            ...state,
            ...payload
        };
    } else if (type === SET_ACTIVE && payload.id === "location") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}

export function gamesReducer(state = {}, { type, payload }) {
    if (type === SET_GAMES) {
        return {
            ...state,
            ...payload
        };
    } else if (type === SET_ACTIVE && payload.id === "games") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}

export function typeReducer(state = {}, { type, payload }) {
    if (type === SET_TYPE) {
        return {
            ...state,
            ...payload
        };
    } else if (type === SET_ACTIVE && payload.id === "type") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}

export function dateReducer(state = { from: getCurrentDate() }, { type, payload }) {
    if (type === SET_DATE) {
        return {
            ...state,
            ...payload
        };
    } else if (type === SET_ACTIVE && payload.id === "date") {
        return {
            ...state,
            active: payload.active
        };
    }

    return state;
}
