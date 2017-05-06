import Api from "../../../api";
import {
    SET_EVENTS
} from "./EventConstants";

export const loadEvents = callback => dispatch =>
    Api.events().then((response) => {
        if (response.ok) {
            response.json().then((payload) => {
                dispatch({
                    type: SET_EVENTS,
                    payload
                });
            });
        }

        callback(response);
    });
