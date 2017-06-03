import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Spinner from "react-mdl/lib/Spinner";

const propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    loading: PropTypes.bool.isRequired
};

const defaultProps = {
    children: null
};

const enhance = pure;

const DetailsSection = ({ title, loading, children }) => (
    <div className="event-section mdl-shadow--2dp">
        <h3 className="event-section__title">{title}</h3>
        {loading ? (
            <Spinner className="event-section__loader" />
        ) : children}
    </div>
);

DetailsSection.propTypes = propTypes;
DetailsSection.defaultProps = defaultProps;

export default enhance(DetailsSection);
