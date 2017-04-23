import React from "react";
import { connect } from "react-redux";
import { setFilterActive } from "../modules/Filters";
import GamesFilter from "../components/filters/GamesFilter.jsx";

const mapStateToProps = ({ gamesFilter }) => gamesFilter;
const mapDispatchToProps = dispatch => ({
    setActive: ev => dispatch(setFilterActive("games", ev.target.checked))
});

const GamesFilterContainer = props => (
    <GamesFilter {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(GamesFilterContainer);
