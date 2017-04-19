import React from "react";
import PropTypes from "prop-types";
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

const LoginInput = ({ icon, label, type, onChange, value }) => (
    <div className="login__input">
        <Icon
            name={icon}
            className="login__icon"
        />
        <Textfield
            onChange={onChange}
            label={label}
            floatingLabel
            type={type}
            value={value}
            className="login__textfield"
        />
    </div>
);

LoginInput.defaultProps = defaultProps;
LoginInput.propTypes = propTypes;

export default LoginInput;
