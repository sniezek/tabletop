import React from "react";
import Checkbox from "react-mdl/lib/Checkbox";
import EventsFilter from "./EventsFilter.jsx";

const TypeFilter = () => (
    <EventsFilter
        name="Type"
        id="type"
    >
        <Checkbox label="Sparing" ripple defaultChecked />
        <Checkbox label="Tournament" ripple defaultChecked />
    </EventsFilter>
);

export default TypeFilter;
