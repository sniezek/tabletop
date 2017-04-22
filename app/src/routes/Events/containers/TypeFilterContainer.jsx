import React from "react";
import { connect } from "react-redux";
import { SET_TYPE, SET_ACTIVE } from "../modules/Filters";
import TypeFilter from "../components/filters/TypeFilter.jsx";

const mapStateToProps = ({ eventsFilters }) => eventsFilters.type;
const mapDispatchToProps = dispatch => ({
    toggleTournament: ev => dispatch({
        type: SET_TYPE,
        payload: {
            tournament: ev.target.checked
        }
    }),
    toggleSparing: ev => dispatch({
        type: SET_TYPE,
        payload: {
            sparing: ev.target.checked
        }
    }),
    setActive: ev => dispatch({
        type: SET_ACTIVE,
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
