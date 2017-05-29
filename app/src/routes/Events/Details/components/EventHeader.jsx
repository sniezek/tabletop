import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import Button from "react-mdl/lib/Button";
import { ViewHeader } from "../../../../components/View";

const propTypes = {
    name: PropTypes.string,
    editEvent: PropTypes.func.isRequired,
    isOrganiser: PropTypes.bool
};

const defaultProps = {
    name: "Loading...",
    isOrganiser: false
};

const enhance = pure;

const EventHeader = ({ name, isOrganiser, editEvent }) => (
    <ViewHeader
        title={name}
    >
        {isOrganiser && (
            <Button
                colored
                onClick={editEvent}
            >Edit event</Button>
        )}
    </ViewHeader>
);

EventHeader.propTypes = propTypes;
EventHeader.defaultProps = defaultProps;

export default enhance(EventHeader);
