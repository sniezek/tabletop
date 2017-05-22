import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import RemindContainer from "../containers/RemindContainer.jsx";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

const RemindView = ({ router }) => (
    <RemindContainer
        router={router}
    />
);

RemindView.propTypes = propTypes;

export default enhance(RemindView);
