import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import DetailsSection from "../DetailsSection.jsx";

const propTypes = {
    content: PropTypes.string
};

const defaultProps = {
    content: null
};

const enhance = pure;

const Description = ({ content }) => (
    <DetailsSection
        title="Description"
        loading={content === null}
    >
        <p className="event-section__text">{content}</p>
    </DetailsSection>
);

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default enhance(Description);
