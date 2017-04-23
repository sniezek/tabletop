import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Icon from "react-mdl/lib/Icon";
import Textfield from "react-mdl/lib/Textfield";

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

const RegisterInput = ({ icon, label, type, onChange, value }) => (
    <div className="register__input">
        <Icon
            name={icon}
            className="register__icon"
        />
        <Textfield
            onChange={onChange}
            label={label}
            floatingLabel
            type={type}
            value={value}
            onBlur={markAsRequired}
            className="register__textfield"
        />
    </div>
);

RegisterInput.defaultProps = defaultProps;
RegisterInput.propTypes = propTypes;

export default enhance(RegisterInput);
