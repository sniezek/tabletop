import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "react-mdl/lib/Dialog";
import LocationFilterContainer from "../containers/LocationFilterContainer.jsx";
import GamesFilterContainer from "../containers/GamesFilterContainer.jsx";
import TypeFilterContainer from "../containers/TypeFilterContainer.jsx";
import DateFilterContainer from "../containers/DateFilterContainer.jsx";
import "./EventsFilters.scss";

const propTypes = {
    displayFilters: PropTypes.bool,
    toggleFilters: PropTypes.func
};

const defaultProps = {
    displayFilters: false,
    toggleFilters: () => {}
};

const enhance = pure;

/* eslint-disable jsx-a11y/anchor-has-content */
const EventsFilters = ({ displayFilters, toggleFilters }) => (
    <Dialog
        className="events-filters"
        open={displayFilters}
    >
        <DialogTitle>Filters</DialogTitle>
        <DialogContent>
            <a tabIndex={0} className="events-filters__focus-trap" />
            <LocationFilterContainer />
            <GamesFilterContainer />
            <TypeFilterContainer />
            <DateFilterContainer />
        </DialogContent>
        <DialogActions>
            <Button colored onClick={() => toggleFilters(false)}>Apply filters</Button>
            <Button onClick={() => toggleFilters(false)}>Close</Button>
        </DialogActions>
    </Dialog>
);

EventsFilters.propTypes = propTypes;
EventsFilters.defaultProps = defaultProps;

export default enhance(EventsFilters);
