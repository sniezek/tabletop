// ------------------------------------
// Constants
// ------------------------------------
export const SET_DATE = "SET_DATE";
export const SET_ACTIVE = "SET_ACTIVE";
export const SET_TYPE = "SET_TYPE";
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

const initialState = {
    location: {},
    games: {},
    type: {},
    date: {
        from: getCurrentDate()
    }
};

export default function filtersReducer(state = initialState, { type, payload }) {
    if (type === SET_DATE) {
        return {
            ...state,
            date: {
                ...state.date,
                ...payload
            }
        };
    } else if (type === SET_ACTIVE) {
        const { id, active } = payload;
        return {
            ...state,
            [id]: {
                ...state[id],
                active
            }
        };
    } else if (type === SET_TYPE) {
        return {
            ...state,
            type: {
                ...state.type,
                ...payload
            }
        };
    } else if (type === SET_LOCATION) {
        return {
            ...state,
            location: {
                ...state.location,
                ...payload
            }
        };
    }

    return state;
}
