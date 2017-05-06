import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import EventsMap from "../components/map/EventsMap.jsx";

const propTypes = {
    events: PropTypes.array
};

const defaultProps = {
    events: []
};

class EventsMapContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentEvent: null
        };

        this.showPopup = this.showPopup.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
    }

    showPopup(currentEvent) {
        this.setState({
            currentEvent
        });
    }

    hidePopup() {
        this.setState({
            currentEvent: null,
            currentMarker: null
        });
    }

    render() {
        const { events } = this.props;
        const { currentEvent } = this.state;

        return (
            <EventsMap
                events={events}
                currentEvent={currentEvent}
                showPopup={this.showPopup}
                hidePopup={this.hidePopup}
            />
        );
    }
}

EventsMapContainer.propTypes = propTypes;
EventsMapContainer.defaultProps = defaultProps;

export default EventsMapContainer;
