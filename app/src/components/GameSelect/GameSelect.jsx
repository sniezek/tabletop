import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import ReactMaterialSelect from "react-material-select";

const propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape(

    ))
};

const defaultProps = {
    label: "Game",
    data: []
};

const enhance = pure;

const GameSelect = ({ label, onChange, data }) => (
    <ReactMaterialSelect
        label={label}
        resetLabel="No game"
        onChange={onChange}
    >
        {data.map(() => (
            <option dataValue="CHESS">Chess</option>
        ))}
    </ReactMaterialSelect>
);

GameSelect.propTypes = propTypes;
GameSelect.defaultProps = defaultProps;

export default enhance(GameSelect);
