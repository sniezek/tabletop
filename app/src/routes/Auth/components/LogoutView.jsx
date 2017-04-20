import React from "react";
import PropTypes from "prop-types";
import LogoutContainer from "../containers/LogoutContainer.jsx";

const propTypes = {
    router: PropTypes.object.isRequired
};

const LogoutView = ({ router }) => (
    <LogoutContainer
        router={router}
    />
);

LogoutView.propTypes = propTypes;

export default LogoutView;
