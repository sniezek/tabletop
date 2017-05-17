import React from "react";
import pure from "recompose/pure";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { setFilterActive, setFilterSelectedType } from "../modules/FilterActions";
import TypeFilter from "../components/filters/TypeFilter.jsx";

const mapStateToProps = ({ typeFilter }) => typeFilter;
const mapDispatchToProps = dispatch => ({
    setType: ev => dispatch(setFilterSelectedType(ev.target.value)),
    setActive: ev => dispatch(setFilterActive("type", ev.target.checked))
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    pure
);

const TypeFilterContainer = props => (
    <TypeFilter {...props} />
);

export default enhance(TypeFilterContainer);
