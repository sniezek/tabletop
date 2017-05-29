import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import compose from "recompose/compose";
import { connect } from "react-redux";
import ReactMaterialSelect from "react-material-select";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })),
    value: PropTypes.string
};

const defaultProps = {
    data: [],
    value: null
};

const mapStateToProps = state => ({
    data: state.tournament.tournamentTypesList
});

const mapDispatchToProps = {};

const enhance = compose(
    pure,
    connect(mapStateToProps, mapDispatchToProps)
);

const TypeSelect = ({ onChange, data, value }) => (
    <ReactMaterialSelect
        label="Tournament type"
        resetLabel="No type"
        onChange={onChange}
        defaultValue={value}
    >
        {data.map(({ name, id }) => (
            <option
                key={id}
                dataValue={id}
            >
                {name}
            </option>
        ))}
    </ReactMaterialSelect>
);

TypeSelect.propTypes = propTypes;
TypeSelect.defaultProps = defaultProps;

export default enhance(TypeSelect);
