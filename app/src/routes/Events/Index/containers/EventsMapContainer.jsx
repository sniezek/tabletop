import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import EventsMap from "../components/map/EventsMap.jsx";

const propTypes = {
    events: PropTypes.array,
    lat: PropTypes.number,
    lng: PropTypes.number,
    goToEvent: PropTypes.func.isRequired
};

const defaultProps = {
    events: [],
    lng: undefined,
    lat: undefined
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
        const { events, lat, lng, goToEvent } = this.props;
        const { currentEvent } = this.state;

        return (
            <EventsMap
                events={events}
                currentEvent={currentEvent}
                showPopup={this.showPopup}
                hidePopup={this.hidePopup}
                lat={lat}
                lng={lng}
                goToEvent={goToEvent}
            />
        );
    }
}

EventsMapContainer.propTypes = propTypes;
EventsMapContainer.defaultProps = defaultProps;

export default EventsMapContainer;
