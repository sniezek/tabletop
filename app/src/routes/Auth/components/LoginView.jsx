import React from "react";
import PropTypes from "prop-types";
import LoginContainer from "../containers/LoginContainer.jsx";

const propTypes = {
    router: PropTypes.object.isRequired
};

const LoginView = ({ router }) => (
    <LoginContainer
        router={router}
    />
);

LoginView.propTypes = propTypes;

export default LoginView;
