import React from "react";
import PropTypes from "prop-types";
import Button from "react-mdl/lib/Button";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "react-mdl/lib/Dialog";
import { LocationFilter, GamesFilter, TypeFilter, DateFilter } from "./filters";
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
            <LocationFilter />
            <GamesFilter />
            <TypeFilter />
            <DateFilter />
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
