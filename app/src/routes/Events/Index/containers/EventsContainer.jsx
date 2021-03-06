import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setMapViewActive } from "../../../../store/config";
import { loadEvents, setEvent } from "../modules/EventActions";
import Events from "../components/Events.jsx";
import { mapLocationFilters, mapDateFilters, mapTypeFilters, mapGamesFilters } from "../modules/FilterUtils";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func,
    user: PropTypes.object,
    loadEvents: PropTypes.func,
    lat: PropTypes.string,
    lng: PropTypes.string,
    events: PropTypes.array,
    router: PropTypes.object.isRequired,
    dateFilter: PropTypes.object.isRequired,
    locationFilter: PropTypes.object.isRequired,
    gamesFilter: PropTypes.object.isRequired,
    typeFilter: PropTypes.object.isRequired,
    preloadEvent: PropTypes.func.isRequired
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
    loadEvents: callback => loadEvents(callback)(dispatch),
    preloadEvent: event => dispatch(setEvent(event))
});

const mapStateToProps = ({ user, config, events, dateFilter, locationFilter, gamesFilter, typeFilter }) => ({
    user,
    mapView: config.mapView,
    events,
    dateFilter,
    locationFilter,
    gamesFilter,
    typeFilter
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EventsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            displayFilters: false
        };

        this.toggleFilters = this.toggleFilters.bind(this);
        this.loadEvents = this.loadEvents.bind(this);
        this.addNewEvent = this.addNewEvent.bind(this);
        this.goToEvent = this.goToEvent.bind(this);
    }

    componentDidMount() {
        this.loadEvents();
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

    addNewEvent() {
        this.props.router.push("/events/create");
    }

    loadEvents() {
        const { locationFilter, gamesFilter, typeFilter, dateFilter } = this.props;

        const filters = {
            ...mapLocationFilters(locationFilter),
            ...mapGamesFilters(gamesFilter),
            ...mapTypeFilters(typeFilter),
            ...mapDateFilters(dateFilter)
        };

        this.props.loadEvents(filters);
    }

    toggleFilters(displayFilters) {
        this.setState({
            displayFilters
        });
    }

    goToEvent(event) {
        const { preloadEvent, router } = this.props;
        preloadEvent(event);
        router.push(`/events/${event.id}`);
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
                lat={lat !== undefined ? parseFloat(lat) : lat}
                lng={lng !== undefined ? parseFloat(lng) : lng}
                loadEvents={this.loadEvents}
                addNewEvent={this.addNewEvent}
                goToEvent={this.goToEvent}
            />
        );
    }
}

EventsContainer.propTypes = propTypes;
EventsContainer.defaultProps = defaultProps;

export default enhance(EventsContainer);
