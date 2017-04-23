import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import LogoutContainer from "../containers/LogoutContainer.jsx";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

const LogoutView = ({ router }) => (
    <LogoutContainer
        router={router}
    />
);

LogoutView.propTypes = propTypes;

export default enhance(LogoutView);
