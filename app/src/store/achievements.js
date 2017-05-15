/**
 * Created by ja on 07.05.17.
 */
import Api from "../api";

export const GET_ACHIEVEMENTS = "GET_ACHIEVEMENTS";
export const GET_NEW_ACHIEVEMENTS = "GET_NEW_ACHIEVEMENTS";
export const GET_ALL_ACHIEVEMENTS = "GET_ALL_ACHIEVEMENTS";

export const getAchievements = (userID, callback = () => {
}) => dispatch =>
  Api.achievements(userID).then((response) => {
    if (response.ok) {
      response.json().then((payload) => {
        dispatch({
          type: GET_ACHIEVEMENTS,
          payload
        });
      });
    }
    callback(response);
  });
export const getNewAchievements = (userID, callback = () => {
}) => dispatch =>
  Api.newAchievements(userID).then((response) => {
    if (response.ok) {
      response.json().then((payload) => {
        dispatch({
          type: GET_NEW_ACHIEVEMENTS,
          payload
        });
      });
    }
    callback(response);
  });

export const getAllAchievements = dispatch =>
  Api.allAchivements().then((response) => {
    if (response.ok) {
      response.json().then((payload) => {
        dispatch({
          type: GET_ALL_ACHIEVEMENTS,
          payload
        });
      });
    }

  });


// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */

export function achievementsReducer(state = null, {type, payload}) {

  if (type === GET_ACHIEVEMENTS) {
    // return Object.assign([], state, {
    //   achievements: payload.achievements
    // })
    return  payload.achievements;

  }

  return state;
}
export function newAchievementsReducer(state = null, {type, payload}) {

  if (type === GET_NEW_ACHIEVEMENTS) {
    // return Object.assign([], state, {
    //   newAchievements: payload
    // })
    return  payload;
  }

  return state;
}
export function allAchievementsReducer(state = null, {type, payload}) {


  if (type === GET_ALL_ACHIEVEMENTS) {
    // return Object.assign([], state, {
    //   allAchievements: payload
    // })
    return  payload;
  }
  return state;
}

