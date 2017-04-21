import Api from "../../../api";

// ------------------------------------
// Constants
// ------------------------------------
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const login = ({ username, password }, callback) => dispatch =>
    Api.login({ username, password }).then((response) => {
        if (response.ok) {
            dispatch({
                type: USER_LOGIN,
                payload: {
                    username
                }
            });
        }

        callback(response);
    });

export const logout = callback => dispatch =>
    Api.logout().then((response) => {
        if (response.ok) {
            dispatch({
                type: USER_LOGOUT
            });
        }

        callback(response);
    });

export const actions = {
    login,
    logout
};

// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */
export default function authReducer(state = null, { type, payload }) {
    if (type === USER_LOGIN) {
        state = {
            name: payload.username,
            avatar: "https://getmdl.io/templates/dashboard/images/user.jpg"
        };
    } else if (type === USER_LOGOUT) {
        state = null;
    }

    return state;
}
