// ------------------------------------
// Constants
// ------------------------------------
export const USER_LOGIN = "USER_LOGIN";

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const login = ({ username, password }, callback) => dispatch => fetch("http://localhost:8080/login", {
    method: "POST",
    mode: "cors",
    headers: new Headers({
        "Content-Type": "application/json"
    }),
    body: JSON.stringify({
        username,
        password
    })
}).then((response) => {
    // TODO: fix setState warning

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

export const actions = {
    login
};

// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */
export default function loginReducer(state = null, { type, payload }) {
    if (type === USER_LOGIN) {
        state = {
            name: payload.username,
            avatar: "https://getmdl.io/templates/dashboard/images/user.jpg"
        };
    }

    return state;
}
