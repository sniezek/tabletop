import React from "react";
import { connect } from "react-redux";
import { SET_FILTER_DATE, SET_FILTER_ACTIVE, SET_FILTER_DATE_FROM, SET_FILTER_DATE_TO, getCurrentDate } from "../modules/Filters";
import DateFilter from "../components/filters/DateFilter.jsx";

const mapStateToProps = ({ dateFilter }) => dateFilter;
const mapDispatchToProps = dispatch => ({
    setFrom: ev => dispatch({
        type: SET_FILTER_DATE_FROM,
        payload: ev.target.value
    }),
    setTo: ev => dispatch({
        type: SET_FILTER_DATE_TO,
        payload: ev.target.value
    }),
    setPastDate: () => dispatch({
        type: SET_FILTER_DATE,
        payload: {
            from: undefined,
            to: getCurrentDate()
        }
    }),
    setFutureDate: () => dispatch({
        type: SET_FILTER_DATE,
        payload: {
            from: getCurrentDate(),
            to: undefined
        }
    }),
    setActive: ev => dispatch({
        type: SET_FILTER_ACTIVE,
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
