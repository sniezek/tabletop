import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import ReactMaterialSelect from "react-material-select";
import Icon from "react-mdl/lib/Icon";
import "./IconSelect.scss";

const propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    resetLabel: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
};

const defaultProps = {
    value: "",
    className: ""
};

const enhance = pure;

const IconSelect = ({ icon, label, onChange, value, className, resetLabel, data, ...rest }) => (
    <div className={`icon-select ${className}`}>
        <Icon
            name={icon}
            className="icon-select__icon"
        />
        <ReactMaterialSelect
            label={label}
            resetLabel={resetLabel}
            onChange={onChange}
            defaultValue={value}
            {...rest}
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
    </div>
);

IconSelect.defaultProps = defaultProps;
IconSelect.propTypes = propTypes;

export default enhance(IconSelect);
