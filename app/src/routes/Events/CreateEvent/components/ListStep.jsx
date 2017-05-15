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

const map = new Map();

map.set("CHESS", {
    minPlayers: 2,
    maxPlayers: 2
});

const ListStep = ({ data, edit, remove, label, add, toggle }) => (
    <StepWrapper>
        {data.length > 0 ? data.map(item => (
            <ListItem
                {...item}
                maxPlayers={item.gameName ? item.maxPlayers : map.get(item.game).maxPlayers}
                minPlayers={item.gameName ? item.minPlayers : map.get(item.game).minPlayers}
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
