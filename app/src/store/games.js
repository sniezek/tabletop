/* eslint-disable no-param-reassign */
import Api from "../api";

export const GET_GAMES = "GET_GAMES";
export const GET_GAME_DETAILS = "GET_GAME_DETAILS";

export const getGames = dispatch =>
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

export const getGameDetails = (dispatch, name) =>
  Api.game("Chess").then((response) => {
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

// ------------------------------------
// Reducer
// ------------------------------------
/* eslint-disable no-param-reassign */
export default function gamesReducer(state = { gamesList: [], game: { name: "" } }, { type, payload }) {
    if (type === GET_GAMES) {
        state = {
            gamesList: payload.gamesList
        };
    } else if (type === GET_GAME_DETAILS) {
        state = {
            game: payload.game
        };
    }
    return state;
}
