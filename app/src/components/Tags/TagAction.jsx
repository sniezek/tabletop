import React from "react";
import pure from "recompose/pure";
import Icon from "react-mdl/lib/Icon";

const enhance = pure;

const TagAction = ({ ...props }) => (
    <button
        type="button"
        {...props}
    >
        <Icon name="cancel" />
    </button>
);

export default enhance(TagAction);
