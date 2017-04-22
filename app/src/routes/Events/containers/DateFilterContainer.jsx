import React from "react";
import { connect } from "react-redux";
import { SET_DATE, SET_ACTIVE, getCurrentDate } from "../modules/Filters";
import DateFilter from "../components/filters/DateFilter.jsx";

const mapStateToProps = ({ eventsFilters }) => eventsFilters.date;
const mapDispatchToProps = dispatch => ({
    setFrom: ev => dispatch({
        type: SET_DATE,
        payload: {
            from: ev.target.value
        }
    }),
    setTo: ev => dispatch({
        type: SET_DATE,
        payload: {
            to: ev.target.value
        }
    }),
    setPastDate: () => dispatch({
        type: SET_DATE,
        payload: {
            from: undefined,
            to: getCurrentDate()
        }
    }),
    setFutureDate: () => dispatch({
        type: SET_DATE,
        payload: {
            from: getCurrentDate(),
            to: undefined
        }
    }),
    setActive: ev => dispatch({
        type: SET_ACTIVE,
        payload: {
            id: "date",
            active: ev.target.checked
        }
    })
});

const DateFilterContainer = props => (
    <DateFilter {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(DateFilterContainer);
