import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Grid, Cell } from "react-mdl/lib";
import EventsList from "../../../Events/Index/components/list/EventsList";

const propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
};

const defaultProps = {
    events: []
};

const enhance = pure;

export const IncomingEvents = events => (
    <Grid>
        <Cell col={8} offsetDesktop={2}>
            { function () {
                if (events.events.length !== 0) {
                    return (<EventsList events={events.events} />);
                }
                return (<div>No upcoming events</div>);
            }.call(this)
            }

        </Cell>
    </Grid>
);

IncomingEvents.propTypes = propTypes;
IncomingEvents.defaultProps = defaultProps;

export default enhance(IncomingEvents);
