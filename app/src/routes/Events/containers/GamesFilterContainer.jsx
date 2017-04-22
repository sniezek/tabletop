import React from "react";
import { connect } from "react-redux";
import { SET_ACTIVE } from "../modules/Filters";
import GamesFilter from "../components/filters/GamesFilter.jsx";

const mapStateToProps = ({ eventsFilters }) => eventsFilters.games;
const mapDispatchToProps = dispatch => ({
    setActive: ev => dispatch({
        type: SET_ACTIVE,
        payload: {
            id: "games",
            active: ev.target.checked
        }
    })
});

const GamesFilterContainer = props => (
    <GamesFilter {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(GamesFilterContainer);
