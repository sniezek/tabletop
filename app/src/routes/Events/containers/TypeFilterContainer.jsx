import React from "react";
import { connect } from "react-redux";
import { setFilterActive, setFilterTournamentActive, setFilterSparingActive } from "../modules/Filters";
import TypeFilter from "../components/filters/TypeFilter.jsx";

const mapStateToProps = ({ typeFilter }) => typeFilter;
const mapDispatchToProps = dispatch => ({
    toggleTournament: ev => dispatch(setFilterTournamentActive(ev.target.checked)),
    toggleSparing: ev => dispatch(setFilterSparingActive(ev.target.checked)),
    setActive: ev => dispatch(setFilterActive("type", ev.target.checked))
});

const TypeFilterContainer = props => (
    <TypeFilter {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilterContainer);
