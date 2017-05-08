import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import pure from "recompose/pure";
import "./View.scss";

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

const defaultProps = {
    className: "",
    children: null
};

const enhance = pure;

const View = ({ className, children }) => (
    <div className={cn("view", className)}>
        {children}
    </div>
);

View.propTypes = propTypes;
View.defaultProps = defaultProps;

export default enhance(View);
