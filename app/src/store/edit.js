import Api from "../api";

export const EDIT = "EDIT";

export const editMail = ({ username, email }, callback) => dispatch =>
  Api.editMail({ username, email }).then((response) => {
    if (response.ok) {
      console.log("edit.js editMail ok");
      dispatch({
        type: EDIT
      });
    } else {
      console.log("edit.js editMail fail");
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
export default function editReducer(state = null, { type, payload }) {
    if (type === EDIT) {
        state = {

        };
    }
    return state;
}
