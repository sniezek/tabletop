import React from "react";
import Button from "react-mdl/lib/Button";
import "./EventsHeader.scss";

export const EventsHeader = () => (
    <div className="events-header mdl-shadow--2dp">
        <h2 className="events-header__title">
            Browse available events
            <span className="events-header__count">(125)</span>
        </h2>
        <div className="events-header__options">
            <Button>Filters</Button>
            <Button>Toggle list view</Button>
        </div>
    </div>
);

export default EventsHeader;
