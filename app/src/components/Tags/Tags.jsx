import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { WithContext as ReactTags } from "react-tag-input";
import TagAction from "./TagAction.jsx";
import "./Tags.scss";

const propTypes = {
    tags: PropTypes.array,
    onAdd: PropTypes.func,
    placeholder: PropTypes.string
};

const defaultProps = {
    tags: [],
    onAdd: () => {},
    placeholder: ""
};

const enhance = pure;

const classNames = {
    tags: "tags tags--small",
    selected: "tags__wrapper",
    tagInputField: "tags__input mdl-textfield__input",
    tagInput: "tags__input-wrapper",
    tag: "tags__tag mdl-chip mdl-chip--deletable",
    remove: "tags__tag-action mdl-chip__action",
    suggestions: "tags__suggestions",
    activeSuggestion: "tags__active-suggestion"
};

const Tags = ({ tags, onAdd, placeholder }) => (
    <ReactTags
        classNames={classNames}
        labelField="id"
        tags={tags}
        handleAddition={onAdd}
        removeComponent={TagAction}
        placeholder={placeholder}
    />
);

Tags.propTypes = propTypes;
Tags.defaultProps = defaultProps;

export default enhance(Tags);
