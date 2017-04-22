import { injectReducer } from "../../store/reducers";

export default store => ({
    path: "/events",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const EventsView = require("./components/EventsView.jsx").default;
            const reducer = require("./modules/Filters").default;
            injectReducer(store, { key: "eventsFilters", reducer });
            cb(null, EventsView);
        }, "events");
    }
});
