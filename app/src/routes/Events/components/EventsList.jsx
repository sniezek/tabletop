import React from "react";
import pure from "recompose/pure";
import EventsListDay from "./EventsListDay.jsx";
import "./EventsList.scss";

const enhance = pure;

const now = Date.now();

const events = [{
    id: 1,
    name: "Event A",
    joined: false,
    location: "Cracow",
    players: 15,
    from: now,
    to: now
}];

const EventsList = () => (
    <div className="events-list">
        <div className="events-list__wrapper">
            <EventsListDay
                date={now}
                events={events}
            />
        </div>
    </div>
);

export default enhance(EventsList);
