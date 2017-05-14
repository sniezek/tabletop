import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl/lib";
import "./IncomingEvents.scss";

const propTypes = {
    eventsList: PropTypes.object.isRequired
};

const enhance = pure;

export const IncomingEvents = eventsList => (
    <Grid>
        <Cell className="listContainer" shadow={1} col={8} offsetDesktop={2}>
        </Cell>
    </Grid>
);

IncomingEvents.propTypes = propTypes;

export default enhance(IncomingEvents);
