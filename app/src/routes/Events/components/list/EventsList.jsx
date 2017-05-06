import React from "react";
import pure from "recompose/pure";
import moment from "moment";
import EventsListDay from "./EventsListDay.jsx";
import "./EventsList.scss";

const enhance = pure;

const groupedEvents = (events) => {
    const map = events.reduce((days, event) => {
        const day = moment(event.startDate).format("dddd, D MMMM");

        if (days.has(day)) {
            days.get(day).push(event);
        } else {
            days.set(day, [event]);
        }

        return days;
    }, new Map());

    const output = [];

    /* eslint-disable */
    for (const [date, list] of map) {
        output.push(
            <EventsListDay
                key={date}
                date={date}
                events={list}
            />
        );
    }

    return output;
};

const EventsList = ({ events }) => (
    <div className="events-list">
        <div className="events-list__wrapper">
            { groupedEvents(events) }
        </div>
    </div>
);

export default enhance(EventsList);
