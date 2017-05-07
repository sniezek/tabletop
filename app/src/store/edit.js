import Api from "../api";

export const EDIT = "EDIT";

export const edit = dispatch =>
    Api.edit().then((response) => {
        if (response.ok) {
            response.json().then(() => {
                dispatch({
                    type: EDIT,
                    payload: {

                    }
                });
            });
        }
    });

// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */
export default function editReducer(state = null, { type, payload }) {
    if (type === EDIT) {
        state = {

        };
    }
    return state;
}
