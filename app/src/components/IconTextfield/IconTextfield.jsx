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
    value: PropTypes.string
};

const defaultProps = {
    type: "text",
    value: "",
    onChange: () => {}
};

const enhance = pure;

const markAsRequired = ({ target }) => {
    /* eslint-disable no-param-reassign */
    if (!target.required) {
        target.required = true;
        target.dispatchEvent(new Event("input", { bubbles: true }));
    }
};

const IconTextfield = ({ icon, label, type, onChange, value }) => (
    <div className="icon-textfield">
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
            onBlur={markAsRequired}
            className="icon-textfield__textfield"
        />
    </div>
);

IconTextfield.defaultProps = defaultProps;
IconTextfield.propTypes = propTypes;

export default enhance(IconTextfield);
