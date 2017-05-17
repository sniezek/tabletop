import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import pure from "recompose/pure";
import "./ViewContent.scss";

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

const defaultProps = {
    className: "",
    children: null
};

const enhance = pure;

const ViewContent = ({ className, children }) => (
    <div className={cn("view-content", className)}>
        {children}
    </div>
);

ViewContent.propTypes = propTypes;
ViewContent.defaultProps = defaultProps;

export default enhance(ViewContent);
