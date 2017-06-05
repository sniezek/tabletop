import Api from "../../../../api";
import {
    SET_EVENTS,
    SET_EVENT,
    REMOVE_PENDING
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

export const loadEvent = (id, callback = () => {}) => dispatch =>
    Api.event(id).then((response) => {
        if (response.ok) {
            response.json().then((payload) => {
                dispatch({
                    type: SET_EVENT,
                    payload
                });
            });
        }

        callback(response);
    });

export const acceptPlayer = ({ type, userId, matchId, eventId }) => dispatch =>
    Api.accept({ eventId, matchId, userId, type }).then((response) => {
        if (response.ok) {
            dispatch({
                type: REMOVE_PENDING,
                payload: { type, userId, matchId, eventId }
            });
        }
    });

export const discardPlayer = ({ type, userId, matchId, eventId }) => dispatch =>
    Api.discard({ eventId, matchId, userId, type }).then((response) => {
        if (response.ok) {
            dispatch({
                type: REMOVE_PENDING,
                payload: { type, userId, matchId, eventId }
            });
        }
    });

export const addPlayer = ({ type, matchId, eventId }) => dispatch =>
    Api.apply({ eventId, matchId, type }).then((response) => {
        if (response.ok) {
            //
        }
    });

export const removePlayer = ({ type, matchId, eventId }) => dispatch =>
    Api.resign({ eventId, matchId, userId, type }).then((response) => {
        if (response.ok) {
            //
        }
    });

export const setEvent = event => ({
    type: SET_EVENT,
    payload: event
});
