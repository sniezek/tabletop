import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import ResetContainer from "../containers/ResetContainer.jsx";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

const ResetView = ({ router }) => (
    <ResetContainer
        router={router}
    />
);

ResetView.propTypes = propTypes;

export default enhance(ResetView);
