export const SET_FILTER_ACTIVE = "SET_FILTER_ACTIVE";

export const SET_FILTER_LOCATION_RADIUS = "SET_FILTER_LOCATION_RADIUS";

export const SET_FILTER_DATE = "SET_FILTER_DATE";
export const SET_FILTER_DATE_FROM = "SET_FILTER_DATE_FROM";
export const SET_FILTER_DATE_TO = "SET_FILTER_DATE_TO";

export const SET_FILTER_TOURNAMENT_ACTIVE = "SET_FILTER_TOURNAMENT_ACTIVE";
export const SET_FILTER_SPARING_ACTIVE = "SET_FILTER_SPARING_ACTIVE";

export const setFilterActive = (id, active) => ({
    type: SET_FILTER_ACTIVE,
    payload: {
        id,
        active
    }
});

export const setFilterLocationRadius = payload => ({
    type: SET_FILTER_LOCATION_RADIUS,
    payload
});

export const setFilterTournamentActive = payload => ({
    type: SET_FILTER_TOURNAMENT_ACTIVE,
    payload
});

export const setFilterSparingActive = payload => ({
    type: SET_FILTER_SPARING_ACTIVE,
    payload
});

export const setFilterDateRange = (from, to) => {
    let type;
    let payload;

    if (from === null) {
        type = SET_FILTER_DATE_TO;
        payload = to;
    } else if (to === null) {
        type = SET_FILTER_DATE_FROM;
        payload = from;
    } else {
        type = SET_FILTER_DATE;
        payload = {
            from,
            to
        };
    }

    return {
        type,
        payload
    };
};

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
        }
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
