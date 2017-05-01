import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import RegisterContainer from "../containers/RegisterContainer.jsx";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

const RegisterView = ({ router }) => (
    <RegisterContainer
        router={router}
    />
);

RegisterView.propTypes = propTypes;

export default enhance(RegisterView);
