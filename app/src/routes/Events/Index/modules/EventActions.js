import Api from "../../../../api";
import {
    SET_EVENTS,
    SET_EVENT
} from "./EventConstants";

export const loadEvents = (filters = {}, callback = () => {}) => dispatch =>
    Api.events(filters).then((response) => {
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

export const setEvent = event => ({
    type: SET_EVENT,
    payload: event
});
