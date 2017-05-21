import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";
import ListItem from "./ListItem.jsx";
import StepWrapper from "./StepWrapper.jsx";

const propTypes = {
    data: PropTypes.array.isRequired,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired
};

const enhance = pure;

const ListStep = ({ data, edit, remove, label, add, toggle }) => (
    <StepWrapper>
        {data.length > 0 ? data.map(item => (
            <ListItem
                {...item}
                primary={item.name || item.gameName || item.game}
                secondary={item.name ? item.game : undefined}
                edit={() => edit(item)}
                remove={() => remove(item)}
                toggle={() => toggle(item)}
            />
        )) : (
            <div className="create-event__no-items">
                <span className="create-event__no-items-label">{label}</span>
                <Button colored onClick={add}>Add new</Button>
            </div>
        )}
    </StepWrapper>
);

ListStep.propTypes = propTypes;

export default enhance(ListStep);
