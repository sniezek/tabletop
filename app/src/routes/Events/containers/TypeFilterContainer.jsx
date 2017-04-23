import React from "react";
import { connect } from "react-redux";
import { SET_FILTER_SPARING_ACTIVE, SET_FILTER_TOURNAMENT_ACTIVE, SET_FILTER_ACTIVE } from "../modules/Filters";
import TypeFilter from "../components/filters/TypeFilter.jsx";

const mapStateToProps = ({ typeFilter }) => typeFilter;
const mapDispatchToProps = dispatch => ({
    toggleTournament: ev => dispatch({
        type: SET_FILTER_TOURNAMENT_ACTIVE,
        payload: ev.target.checked
    }),
    toggleSparing: ev => dispatch({
        type: SET_FILTER_SPARING_ACTIVE,
        payload: ev.target.checked
    }),
    setActive: ev => dispatch({
        type: SET_FILTER_ACTIVE,
        payload: {
            id: "type",
            active: ev.target.checked
        }
    })
});

const TypeFilterContainer = props => (
    <TypeFilter {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilterContainer);
