import Api from "../api";

export const GET_GAMES = "GET_GAMES";

export const getGames = callback => dispatch =>
  Api.getGames().then((response) => {
     if (response.ok) {
        response.json().then(({ gamesList }) => {
          dispatch({
            type: GET_GAMES,
            payload: {
              gamesList
            }
          });
        });
     }
  });


export default function gamesReducer(state = null, { type, payload }) {
    if (type === GET_GAMES) {
        state = {
            gamesList: payload.gamesList,
        };
    }

    return state;
}
