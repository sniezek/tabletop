import Api from "../api";

// ------------------------------------
// Constants
// ------------------------------------
export const GET_TOURNAMENT = "GET_TOURNAMENT";
export const GET_TOURNAMENT_TYPES = "GET_TOURNAMENT_TYPES";
export const GET_FINISHED_TOURNAMENTS = "GET_FINISHED_TOURNAMENTS";
export const NEXT_ROUND = "NEXT_ROUND";
export const SET_WINNER = "SET_WINNER";
export const INITIAL_ROUND = "INITIAL_ROUND";
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

export const getTournamentTypes = dispatch =>
  Api.tournamentypes().then((response) => {
      if (response.ok) {
          response.json().then((tournamentTypesList) => {
              dispatch({
                  type: GET_TOURNAMENT_TYPES,
                  payload: {
                      tournamentTypesList
                  }
              });
          });
      }
  });

export const getFinishedTournaments = dispatch =>
  Api.finishedtournaments().then((response) => {
      if (response.ok) {
          response.json().then((finishedTournamentsList) => {
              dispatch({
                  type: GET_FINISHED_TOURNAMENTS,
                  payload: {
                      finishedTournamentsList
                  }
              });
          });
      }
  });

export const nextRound = ( id , callback) => dispatch =>
  Api.nextRound( id ).then((response) => {
      if (response.ok) {
          response.json().then(( pairs ) => {
            let pairsFormatted = pairs.map(pair => {
              return {
                host: pair["a"],
                guest: pair["b"],
                winner: "0"
              }
            });
              dispatch({
                  type: NEXT_ROUND,
                  payload: {
                    pairsFormatted
                  }
              });
          });
      }

      callback(response);
  });

export const setWinner = (id, winner , callback) => dispatch =>
  Api.setWinner( id, winner ).then((response) => {
      console.log("setWinner1")
      if (response.ok) {
        console.log("setWinner2")
          dispatch({
              type: SET_WINNER
          });
      }
    console.log("setWinner3")
      callback(response);
  });

export const initialRound = ( id , callback) => dispatch =>
  Api.initialRound( id ).then((response) => {
    if (response.ok) {
      response.json().then(( pairs ) => {
        let pairsFormatted = pairs.map(pair => {
          return {
            host: pair["a"],
            guest: pair["b"],
            winner: "0"
          }
        });
        dispatch({
          type: INITIAL_ROUND,
          payload: {
            pairsFormatted
          }
        });
      });
    }

    callback(response);
  });


export const actions = {
    getTournament,
    nextRound,
    initialRound,
    setWinner
};

// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */
export default function tournamentReducer(state = null, { type, payload }) {
    if (type === GET_TOURNAMENT) {
        state = {
            pairs: payload.pairs
        };
    } else if (type === GET_TOURNAMENT_TYPES) {
        state = {
            tournamentTypesList: payload.tournamentTypesList
        };
    } else if (type === NEXT_ROUND) {
        state = {
            pairs: payload.pairsFormatted
        };
    } else if (type === GET_FINISHED_TOURNAMENTS) {
        state = {
            finishedTournamentsList: payload.finishedTournamentsList
        };
    } else if (type === INITIAL_ROUND) {
        state = {
            pairs: payload.pairsFormatted
        };
    }
    return state;
}
