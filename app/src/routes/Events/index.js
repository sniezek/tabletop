import { injectReducer } from "../../store/reducers";

export default store => ({
    path: "/events",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const EventsView = require("./components/EventsView.jsx").default;
            const { locationReducer, typeReducer, gamesReducer, dateReducer } = require("./modules/FilterReducers");
            injectReducer(store, { key: "locationFilter", reducer: locationReducer });
            injectReducer(store, { key: "typeFilter", reducer: typeReducer });
            injectReducer(store, { key: "gamesFilter", reducer: gamesReducer });
            injectReducer(store, { key: "dateFilter", reducer: dateReducer });
            cb(null, EventsView);
        }, "events");
    }
});
