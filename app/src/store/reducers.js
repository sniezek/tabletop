import { combineReducers } from "redux";
import locationReducer from "./location";
import authReducer from "./auth";
import gamesReducer from "./games";
import configReducer from "./config";

export const makeRootReducer = asyncReducers => combineReducers({
    location: locationReducer,
    user: authReducer,
    games: gamesReducer,
    config: configReducer,
    ...asyncReducers
});

export const injectReducer = (store, { key, reducer }) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    /* eslint-disable no-param-reassign */
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
