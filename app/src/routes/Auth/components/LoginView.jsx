import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import LoginContainer from "../containers/LoginContainer.jsx";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

const LoginView = ({ router }) => (
    <LoginContainer
        router={router}
    />
);

LoginView.propTypes = propTypes;

export default enhance(LoginView);
