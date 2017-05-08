import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setMapViewActive } from "../../../store/config";
import { loadEvents } from "../modules/EventActions";
import Events from "../components/Events.jsx";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func,
    user: PropTypes.object,
    loadEvents: PropTypes.func,
    lat: PropTypes.string,
    lng: PropTypes.string,
    events: PropTypes.array,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    mapView: true,
    user: null,
    toggleMapView: () => {},
    loadEvents: () => {},
    lat: undefined,
    lng: undefined,
    events: []
};

const mapDispatchToProps = dispatch => ({
    toggleMapView: active => dispatch(setMapViewActive(active)),
    loadEvents: callback => loadEvents(callback)(dispatch)
});

const mapStateToProps = ({ user, config, events }) => ({
    user,
    mapView: config.mapView,
    events
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EventsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            displayFilters: false
        };

        this.toggleFilters = this.toggleFilters.bind(this);
    }

    componentDidMount() {
        this.props.loadEvents(() => {});
    }

    componentWillReceiveProps({ lat, lng, mapView }) {
        const { router } = this.props;
        const positionDefined = lat !== undefined && lng !== undefined;
        const positionChanged = this.props.lat !== lat || this.props.lng !== lng;
        const viewSwitchedToList = !mapView && this.props.mapView;

        if (positionDefined && positionChanged) {
            this.props.toggleMapView(true);
        } else if (viewSwitchedToList && router.location.search !== "") {
            router.push("/events");
        }
    }

    toggleFilters(displayFilters) {
        this.setState({
            displayFilters
        });
    }

    render() {
        const { displayFilters } = this.state;
        const { mapView, toggleMapView, user, events, lat, lng } = this.props;
        const loggedIn = user !== null;

        return (
            <Events
                mapView={mapView}
                toggleMapView={toggleMapView}
                toggleFilters={this.toggleFilters}
                displayFilters={displayFilters}
                loggedIn={loggedIn}
                events={events}
                lat={lat !== undefined ? parseInt(lat, 10) : lat}
                lng={lng !== undefined ? parseInt(lng, 10) : lng}
            />
        );
    }
}

EventsContainer.propTypes = propTypes;
EventsContainer.defaultProps = defaultProps;

export default enhance(EventsContainer);
