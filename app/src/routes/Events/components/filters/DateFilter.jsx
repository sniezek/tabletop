import React from "react";
import Textfield from "react-mdl/lib/Textfield";
import Button from "react-mdl/lib/Button";
import EventsFilter from "./EventsFilter.jsx";
import "./DateFilter.scss";

const DateFilter = () => (
    <EventsFilter
        name="Date"
        id="date"
    >
        <div className="date-filter__range">
            <Textfield
                onChange={() => {}}
                label="From (dd-mm-yyyy)"
                pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                floatingLabel
            />
            <Textfield
                onChange={() => {}}
                label="To (dd-mm-yyyy)"
                pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                floatingLabel
            />
        </div>
        <div>
            <span className="date-filter__actions">Quick actions:</span>
            <Button>Past events</Button>
            <Button>Upcoming events</Button>
        </div>
    </EventsFilter>
);

export default DateFilter;
