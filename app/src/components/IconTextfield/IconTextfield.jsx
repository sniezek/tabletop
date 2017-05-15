import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Icon from "react-mdl/lib/Icon";
import Textfield from "react-mdl/lib/Textfield";
import "./IconTextfield.scss";

const propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string
};

const defaultProps = {
    type: "text",
    value: "",
    onChange: () => {},
    required: false,
    className: ""
};

const enhance = pure;

const markAsRequired = ({ target }) => {
    /* eslint-disable no-param-reassign */
    if (!target.required) {
        target.required = true;
        target.dispatchEvent(new Event("input", { bubbles: true }));
    }
};

const noop = () => {};

const IconTextfield = ({ icon, label, type, onChange, value, required, className, ...rest }) => (
    <div className={`icon-textfield ${className}`}>
        <Icon
            name={icon}
            className="icon-textfield__icon"
        />
        <Textfield
            onChange={onChange}
            label={label}
            floatingLabel
            type={type}
            value={value}
            onBlur={required ? markAsRequired : noop}
            className="icon-textfield__textfield"
            {...rest}
        />
    </div>
);

IconTextfield.defaultProps = defaultProps;
IconTextfield.propTypes = propTypes;

export default enhance(IconTextfield);
