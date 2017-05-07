import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import "./PageHeader.scss";

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

const PageHeader = ({ title, count, children }) => (
    <div className="page-header mdl-shadow--2dp">
        <h2 className="page-header__title">
            {title}
            { count !== undefined && <span className="page-header__count">({count})</span> }
        </h2>
        {children}
    </div>
);

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default enhance(PageHeader);
