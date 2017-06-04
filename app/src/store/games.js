/* eslint-disable no-param-reassign */
import Api from "../api";

export const GET_GAMES = "GET_GAMES";
export const GET_GAME_DETAILS = "GET_GAME_DETAILS";
export const GET_GAME_RANKING = "GET_GAME_RANKING";
export const GET_INCOMING_GAMES = "GET_INCOMING_GAMES";

export const getGames = () => dispatch =>
    Api.games().then((response) => {
        if (response.ok) {
            response.json().then((gamesList) => {
                dispatch({
                    type: GET_GAMES,
                    payload: {
                        gamesList
                    }
                });
            });
        }
    });

export const getGameDetails = name => dispatch =>
  Api.game(name).then((response) => {
      if (response.ok) {
          response.json().then((game) => {
              dispatch({
                  type: GET_GAME_DETAILS,
                  payload: {
                      game
                  }
              });
          });
      }
  });

export const getGameRanking = gameName => dispatch =>
  Api.ranking(gameName).then((response) => {
      if (response.ok) {
          response.json().then((gameRankingList) => {
              dispatch({
                  type: GET_GAME_RANKING,
                  payload: {
                      gameRankingList
                  }
              });
          });
      }
  });

export const getIncomingGames = filters => dispatch =>
  Api.events(filters).then((response) => {
      if (response.ok) {
          response.json().then((eventsList) => {
              dispatch({
                  type: GET_INCOMING_GAMES,
                  payload: {
                      eventsList
                  }
              });
          });
      }
  });

// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */
export default function gamesReducer(state = { gamesList: [], game: { name: "" }, gameRankingList: [], eventsList: [] }, { type, payload }) {
    if (type === GET_GAMES) {
        state = {
            ...state,
            gamesList: payload.gamesList
        };
    } else if (type === GET_GAME_DETAILS) {
        state = {
            ...state,
            game: payload.game
        };
    } else if (type === GET_GAME_RANKING) {
        state = {
            ...state,
            gameRankingList: payload.gameRankingList
        };
    } else if (type === GET_INCOMING_GAMES) {
        state = {
            ...state,
            eventsList: payload.eventsList
        };
    }
    return state;
}
