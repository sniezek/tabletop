import Api from "../api";

// ------------------------------------
// Constants
// ------------------------------------
export const GET_TOURNAMENT = "GET_TOURNAMENT";
export const GET_TOURNAMENTS = "GET_TOURNAMENTS";
export const SHOW_TOURNAMENT = "SHOW_TOURNAMENT";
export const GET_TOURNAMENT_TYPES = "GET_TOURNAMENT_TYPES";
export const GET_FINISHED_TOURNAMENTS = "GET_FINISHED_TOURNAMENTS";
export const GET_FINAL_RESULTS = "GET_FINAL_RESULTS";
export const NEXT_ROUND = "NEXT_ROUND";
export const SET_WINNER = "SET_WINNER";
export const INITIAL_ROUND = "INITIAL_ROUND";
export const GET_STATE = "GET_STATE";
export const FINISH_TOURNAMENT = "FINISH_TOURNAMENT";
export const GIVE_UP = "GIVE_UP";
// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const showTournament = id => dispatch =>
      dispatch({
          type: SHOW_TOURNAMENT,
          payload: {
              id
          }
      });

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

export const getTournamentTypes = (callback) => dispatch =>
  Api.tournamentTypes().then((response) => {
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
      callback(response);
  });

export const getFinishedTournaments = dispatch =>
  Api.finishedTournaments().then((response) => {
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

export const getFinalResults = (id, callback) => dispatch =>
  Api.getFinalResults(id).then((response) => {
      if (response.ok) {
          response.json().then((finalResults) => {
              dispatch({
                  type: GET_FINAL_RESULTS,
                  payload: {
                      finalResults
                  }
              });
          });
      }
      callback(response);
  });

export const nextRound = (id, callback) => dispatch =>
  Api.nextRound(id).then((response) => {
      if (response.ok) {
          response.json().then(dispatchTournamentStateAction(dispatch));
      }
      callback(response);
  });

export const setWinner = (id, winner, callback) => dispatch =>
  Api.setWinner(id, winner).then((response) => {
      if (response.ok) {
          dispatch({
              type: SET_WINNER
          });
      }
      callback(response);
  });

function dispatchTournamentStateAction(dispatch) {
    return (tournament) => {
        dispatch({
            type: INITIAL_ROUND,
            payload: {
                pairs: tournament.pairs,
                creator: tournament.creator,
                isCurrentUserParticipant: tournament.participant
            }
        });
    };
}

export const initialRound = (id, callback) => dispatch =>
  Api.initialRound(id).then((response) => {
      if (response.ok) {
          response.json().then(dispatchTournamentStateAction(dispatch));
      }

      callback(response);
  });

export const getTournaments = (id, callback) => dispatch =>
  Api.getTournaments(id).then((response) => {
      if (response.ok) {
          response.json().then((tournaments) => {
              dispatch({
                  type: GET_TOURNAMENTS,
                  payload: {
                      tournaments
                  }
              });
          });
      }
      callback(response);
  });

export const getState = (id, callback) => dispatch =>
  Api.getState(id).then((response) => {
      if (response.ok) {
          response.json().then(dispatchTournamentStateAction(dispatch));
      }
      callback(response);
  });

export const finishTournament = (id, callback) => dispatch =>
  Api.finishTournament(id).then((response) => {
      if (response.ok) {
          dispatch({
              type: FINISH_TOURNAMENT
          });
      }
      callback(response);
  });

export const giveUp = id => dispatch =>
  Api.giveUp(id).then((response) => {
      if (response.ok) {
          dispatch({
              type: GIVE_UP
          });
      }
  });


export const actions = {
    showTournament,
    getTournament,
    getTournamentTypes,
    getFinalResults,
    nextRound,
    initialRound,
    setWinner,
    getState,
    finishTournament,
    getTournaments
};

// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */
const initialState = {
    pairs: [],
    creator: {
        username: ""
    },
    isCurrentUserParticipant: false,
    tournaments: [],
    tournamentId: 0
};

export default function tournamentReducer(state = initialState, { type, payload }) {
    if (type === GET_TOURNAMENT) {
        state = {
            ...state,
            pairs: payload.pairs
        };
    } else if (type === GET_TOURNAMENT_TYPES) {
        state = {
            ...state,
            tournamentTypesList: payload.tournamentTypesList
        };
    } else if (type === GET_FINAL_RESULTS) {
        state = {
            ...state,
            finalResults: payload.finalResults
        };
    } else if (type === GET_FINISHED_TOURNAMENTS) {
        state = {
            ...state,
            finishedTournamentsList: payload.finishedTournamentsList
        };
    } else if (type === INITIAL_ROUND || type === GET_STATE || type === NEXT_ROUND) {
        state = {
            ...state,
            pairs: payload.pairs,
            creator: payload.creator,
            isCurrentUserParticipant: payload.isCurrentUserParticipant
        };
    } else if (type === SHOW_TOURNAMENT) {
        state = {
            ...state,
            tournamentId: payload.id
        };
    } else if (type === GET_TOURNAMENTS) {
        state = {
            ...state,
            tournaments: payload.tournaments
        };
    }
    return state;
}
