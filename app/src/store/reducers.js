import { combineReducers } from "redux";
import locationReducer from "./location";
import authReducer from "./auth";
import gamesReducer from "./games";
import configReducer from "./config";
import tournamentReducer from "./tournament";
import editReducer from "./edit";
import {achievementsReducer,newAchievementsReducer,allAchievementsReducer} from "./achievements"

export const makeRootReducer = asyncReducers => combineReducers({
    location: locationReducer,
    user: authReducer,
    tournament: tournamentReducer,
    games: gamesReducer,
    config: configReducer,
    edit: editReducer,
    achievements: achievementsReducer,
    newAchievements: newAchievementsReducer,
    allAchievements: allAchievementsReducer,
    ...asyncReducers
});

export const injectReducer = (store, { key, reducer }) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  /* eslint-disable no-param-reassign */
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
