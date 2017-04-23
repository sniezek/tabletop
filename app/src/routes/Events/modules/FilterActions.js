import {
    SET_FILTER_ACTIVE,
    SET_FILTER_LOCATION_RADIUS,
    SET_FILTER_TOURNAMENT_ACTIVE,
    SET_FILTER_SPARING_ACTIVE,
    SET_FILTER_DATE,
    SET_FILTER_DATE_FROM,
    SET_FILTER_DATE_TO,
    ADD_FILTER_GAME,
    DELETE_FILTER_GAME
} from "./FilterConstants";

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

export const addFilterGame = payload => ({
    type: ADD_FILTER_GAME,
    payload
});

export const deleteFilterGame = payload => ({
    type: DELETE_FILTER_GAME,
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
