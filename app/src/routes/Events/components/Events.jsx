import React from "react";
import EventsHeader from "./EventsHeader.jsx";
import EventsMapContainer from "../containers/EventsMapContainer.jsx";
import "./Events.scss";

export const Events = () => (
    <div className="events">
        <EventsHeader />
        <EventsMapContainer />
    </div>
);

export default Events;
