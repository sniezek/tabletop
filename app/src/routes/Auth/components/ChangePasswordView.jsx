import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import ChangePasswordContainer from "../containers/ChangePasswordContainer.jsx";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

const ChangePasswordView = ({ router }) => (
    <ChangePasswordContainer
        router={router}
    />
);

ChangePasswordView.propTypes = propTypes;

export default enhance(ChangePasswordView);
