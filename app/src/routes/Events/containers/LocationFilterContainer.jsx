import React from "react";
import { connect } from "react-redux";
import { setFilterLocationRadius, setFilterActive } from "../modules/Filters";
import LocationFilter from "../components/filters/LocationFilter.jsx";

const mapStateToProps = ({ locationFilter }) => locationFilter;
const mapDispatchToProps = dispatch => ({
    setRadius: ev => dispatch(setFilterLocationRadius(ev.target.value, 10)),
    setActive: ev => dispatch(setFilterActive("location", ev.target.checked))
});

const LocationFilterContainer = props => (
    <LocationFilter {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilterContainer);
