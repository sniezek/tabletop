import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

const defaultProps = {
    className: ""
};

const enhance = pure;

const StepWrapper = ({ children, className }) => (
    <div className={`create-event__tab-wrapper ${className}`}>
        {children}
    </div>
);

StepWrapper.propTypes = propTypes;
StepWrapper.defaultProps = defaultProps;

export default enhance(StepWrapper);
