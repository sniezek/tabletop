import Api from "../api";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const REMIND = "REMIND";
export const RESET = "RESET";
export const CHANGE = "CHANGE";

const dispatchLogin = (response, dispatch) =>
    response.json().then(({ username, email, id }) => {
        dispatch({
            type: USER_LOGIN,
            payload: {
                username,
                email,
                id
            }
        });
    });

const dispatchReset = (response, dispatch) =>
    response.json().then(({ password }) => {
        dispatch({
            type: RESET,
            payload: {
                password
            }
        });
    });

export const login = ({ username, password }, callback) => dispatch =>
    Api.login({ username, password }).then((response) => {
        if (response.ok) {
            dispatchLogin(response, dispatch);
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

export const register = ({ username, password, email }, callback) => dispatch =>
    Api.register({ username, password, email }).then((response) => {
        if (response.ok) {
            response.json().then(({ id }) => {
                login({ username, password, id }, callback)(dispatch);
            });
        } else {
            callback(response);
        }
    });

export const remind = ({ email }, callback) => dispatch =>
    Api.remind({ email }).then((response) => {
        if (response.ok) {
            dispatch({
                type: REMIND
            });
        }

        callback(response);
    });

export const changePassword = ({ id, password, token }, callback) => dispatch =>
    Api.changePassword({ id, password, token }).then((response) => {
        if (response.ok) {
            dispatch({
                type: CHANGE
            });
        }

        callback(response);
    });

export const reset = ({ token, id }, callback) => dispatch =>
    Api.reset({ token, id }).then((response) => {
        if (response.ok) {
            dispatch({type: RESET});
        }

        callback(response);
    });

export const data = callback => dispatch =>
    Api.user().then((response) => {
        if (response.ok) {
            dispatchLogin(response, dispatch);
        }

        callback(response);
    });

const initialState = null;
export default function authReducer(state = initialState, { type, payload }) {
    if (type === USER_LOGIN) {
        return {
            id: payload.id,
            name: payload.username,
            email: payload.email
        };
    } else if (type === USER_LOGOUT) {
        return null;
    }

    return state;
}
