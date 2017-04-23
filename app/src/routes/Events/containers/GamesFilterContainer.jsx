import React from "react";
import { connect } from "react-redux";
import { SET_FILTER_ACTIVE } from "../modules/Filters";
import GamesFilter from "../components/filters/GamesFilter.jsx";

const mapStateToProps = ({ gamesFilter }) => gamesFilter;
const mapDispatchToProps = dispatch => ({
    setActive: ev => dispatch({
        type: SET_FILTER_ACTIVE,
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
