import Api from "../api";

// ------------------------------------
// Constants
// ------------------------------------
export const GET_TOURNAMENT = "GET_TOURNAMENT";
export const NEXT_ROUND = "NEXT_ROUND";
export const SET_WINNER = "SET_WINNER";
// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const getTournament = ({ id }, callback) => dispatch =>
    Api.getTournament({ id }).then((response) => {
        if (response.ok) {
          response.json().then(({ pairs }) => {
            dispatch({
              type: GET_TOURNAMENT,
              payload: {
                pairs
              }
            });
          });
        }

        callback(response);
    });

export const nextRound = ({ id }, callback) => dispatch =>
  Api.nextRound({ id }).then((response) => {
    if (response.ok) {
      response.json().then(({ pairs }) => {
        dispatch({
          type: NEXT_ROUND,
          payload: {
            pairs
          }
        });
      });
    }

    callback(response);
  });

export const setWinner = ({ winner }, callback) => dispatch =>
  Api.setWinner({ winner }).then((response) => {
    if (response.ok) {
      dispatch({
        type: SET_WINNER
      });
    }

    callback(response);
  });

export const actions = {
    getTournament,
    nextRound,
    setWinner
};

// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */
export default function tournamentReducer(state = null, { type, payload }) {
    if (type === GET_TOURNAMENT) {
        state = {
            pairs: payload.pairs,
        };
    } else if (type === NEXT_ROUND) {
        state = {
            pairs: payload.pairs,
        };
    }
    return state;
}
