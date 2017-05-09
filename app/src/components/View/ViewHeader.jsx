import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import "./ViewHeader.scss";

const propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    count: PropTypes.number
};

const defaultProps = {
    count: undefined,
    children: null
};

const enhance = pure;

const ViewHeader = ({ title, count, children }) => (
    <div className="view-header mdl-shadow--2dp">
        <h2 className="view-header__title">
            {title}
            { count !== undefined && <span className="view-header__count">({count})</span> }
        </h2>
        {children}
    </div>
);

ViewHeader.propTypes = propTypes;
ViewHeader.defaultProps = defaultProps;

export default enhance(ViewHeader);
