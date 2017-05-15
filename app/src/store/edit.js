import Api from "../api";

export const EDIT = "EDIT";

export const editMail = ({ username, email, password }, callback) => dispatch =>
  Api.editMail({ username, email, password }).then((response) => {
    if (response.ok) {
      dispatch({
        type: EDIT
      });
    } else {
      callback(response);
    }
  });

export const editPass = ({ username, email, password }, callback) => dispatch =>
  Api.editPass({ username, email, password}).then((response) => {
    if (response.ok) {
      dispatch({
        type: EDIT
      });
    } else {
      callback(response);
    }
  });

// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */
const initialState = null;
export default function editReducer(state = initialState, { type, payload }) {
    if (type === EDIT) {
        return {
            // name: payload.username,
            // email: payload.email
        };
    }
    return state;
}
