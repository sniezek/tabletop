import React from "react";
import pure from "recompose/pure";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { setFilterActive } from "../modules/FilterActions";
import GamesFilter from "../components/filters/GamesFilter.jsx";

const mapStateToProps = ({ gamesFilter }) => gamesFilter;
const mapDispatchToProps = dispatch => ({
    setActive: ev => dispatch(setFilterActive("games", ev.target.checked))
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    pure
);

const GamesFilterContainer = props => (
    <GamesFilter {...props} />
);

export default enhance(GamesFilterContainer);
