import React from "react";
import pure from "recompose/pure";
import EventsListDay from "./EventsListDay.jsx";
import "./EventsList.scss";

const enhance = pure;

const EventsList = () => (
    <div className="events-list">
        <div className="events-list__wrapper">
            <EventsListDay
                date=""
                events={[]}
            />
        </div>
    </div>
);

export default enhance(EventsList);
