import React from "react";
import PropTypes from "prop-types";
import Button from "react-mdl/lib/Button";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "react-mdl/lib/Dialog";
import EventsFilter from "./EventsFilter.jsx";
import "./EventsFilters.scss";

const propTypes = {
    displayFilters: PropTypes.bool,
    toggleFilters: PropTypes.func
};

const defaultProps = {
    displayFilters: false,
    toggleFilters: () => {}
};

const EventsFilters = ({ displayFilters, toggleFilters }) => (
    <Dialog
        className="events-filters"
        open={displayFilters}
    >
        <DialogTitle>Filters</DialogTitle>
        <DialogContent>
            <EventsFilter name="Location">
                ...
            </EventsFilter>
            <EventsFilter name="Games">
                ...
            </EventsFilter>
            <EventsFilter name="Type">
                ...
            </EventsFilter>
        </DialogContent>
        <DialogActions>
            <Button colored onClick={() => toggleFilters(false)}>Apply filters</Button>
            <Button onClick={() => toggleFilters(false)}>Close</Button>
        </DialogActions>
    </Dialog>
);

EventsFilters.propTypes = propTypes;
EventsFilters.defaultProps = defaultProps;

export default EventsFilters;
