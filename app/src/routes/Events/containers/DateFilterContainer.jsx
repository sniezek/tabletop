import React from "react";
import { connect } from "react-redux";
import { setFilterActive, setFilterDateRange, getCurrentDate } from "../modules/Filters";
import DateFilter from "../components/filters/DateFilter.jsx";

const mapStateToProps = ({ dateFilter }) => dateFilter;
const mapDispatchToProps = dispatch => ({
    setFrom: ev => dispatch(setFilterDateRange(ev.target.value, null)),
    setTo: ev => dispatch(setFilterDateRange(null, ev.target.value)),
    setPastDate: () => dispatch(setFilterDateRange(undefined, getCurrentDate())),
    setFutureDate: () => dispatch(setFilterDateRange(getCurrentDate(), undefined)),
    setActive: ev => dispatch(setFilterActive("date", ev.target.checked))
});

const DateFilterContainer = props => (
    <DateFilter {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(DateFilterContainer);
