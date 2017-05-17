import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import EventsMap from "../components/map/EventsMap.jsx";

const propTypes = {
    events: PropTypes.array,
    lat: PropTypes.number,
    lng: PropTypes.number
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
        const { events, lat, lng } = this.props;
        const { currentEvent } = this.state;

        return (
            <EventsMap
                events={events}
                currentEvent={currentEvent}
                showPopup={this.showPopup}
                hidePopup={this.hidePopup}
                lat={lat}
                lng={lng}
            />
        );
    }
}

EventsMapContainer.propTypes = propTypes;
EventsMapContainer.defaultProps = defaultProps;

export default EventsMapContainer;
