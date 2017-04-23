import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Icon from "react-mdl/lib/Icon";

const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

const defaultProps = {
    className: "",
    onClick: () => {}
};

const enhance = pure;

const TagAction = ({ className, onClick }) => (
    <button
        type="button"
        className={className}
        onClick={onClick}
    >
        <Icon name="cancel" />
    </button>
);

TagAction.propTypes = propTypes;
TagAction.defaultProps = defaultProps;

export default enhance(TagAction);
