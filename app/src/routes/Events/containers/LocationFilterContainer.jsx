import React from "react";
import { connect } from "react-redux";
import { SET_FILTER_LOCATION_RADIUS, SET_FILTER_ACTIVE } from "../modules/Filters";
import LocationFilter from "../components/filters/LocationFilter.jsx";

const mapStateToProps = ({ locationFilter }) => locationFilter;
const mapDispatchToProps = dispatch => ({
    setRadius: ev => dispatch({
        type: SET_FILTER_LOCATION_RADIUS,
        payload: parseInt(ev.target.value, 10)
    }),
    setActive: ev => dispatch({
        type: SET_FILTER_ACTIVE,
        payload: {
            id: "location",
            active: ev.target.checked
        }
    })
});

const LocationFilterContainer = props => (
    <LocationFilter {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilterContainer);
