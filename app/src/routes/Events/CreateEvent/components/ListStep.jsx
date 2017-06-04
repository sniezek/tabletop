import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import compose from "recompose/compose";
import { connect } from "react-redux";
import Button from "react-mdl/lib/Button";
import ListItem from "./ListItem.jsx";
import StepWrapper from "./StepWrapper.jsx";

const propTypes = {
    data: PropTypes.array.isRequired,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    games: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    games: state.games.gamesList,
    types: state.tournament.tournamentTypesList
});

const mapDispatchToProps = {};

const enhance = compose(
    pure,
    connect(mapStateToProps, mapDispatchToProps)
);

const itemProps = (games, types, { gameName, maxPlayers, minPlayers, game, name, type }) => {
    const isCustomGame = !!gameName;

    if (isCustomGame) {
        return {
            primary: gameName,
            maxPlayers,
            minPlayers
        };
    }

    const _game = games.find(item => item.id === game);
    const isSparring = !name;

    let primary = _game.name;
    let secondary;

    if (!isSparring) {
        const _type = types.find(item => item.id === type).name;
        primary = name;
        secondary = `${_game.name} – ${_type}`;
    }

    return {
        primary,
        secondary,
        maxPlayers,
        minPlayers
    };
};

const ListStep = ({ data, edit, remove, label, add, toggle, games, types }) => (
    <StepWrapper>
        {data.length > 0 ? data.map(item => (
            <ListItem
                {...item}
                {...itemProps(games, types, item)}
                key={item.__uid}
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
