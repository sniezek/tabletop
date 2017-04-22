import React from "react";
import EventsHeader from "./EventsHeader.jsx";
import EventsMap from "./EventsMap.jsx";
import "./Events.scss";

export const Events = () => (
    <div className="events">
        <EventsHeader />
        <EventsMap />
    </div>
);

export default Events;
