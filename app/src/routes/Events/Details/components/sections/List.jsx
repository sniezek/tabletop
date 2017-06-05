import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import DetailsSection from "../DetailsSection.jsx";
import ListItem from "./ListItem.jsx";

const propTypes = {
    events: PropTypes.array,
    title: PropTypes.string.isRequired
};

const defaultProps = {
    events: null
};

const enhance = pure;

const List = ({ events, title, ...rest }) => (
    <DetailsSection
        title={title}
        loading={events === null}
    >
        {events && events.map(event => (
            <ListItem
                key={event.id}
                primary={event.gameName}
                {...event}
                {...rest}
            />
        ))}
    </DetailsSection>
);

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default enhance(List);
