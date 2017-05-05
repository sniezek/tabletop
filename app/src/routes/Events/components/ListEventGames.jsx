import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Reveal from "../../../components/Reveal";

const propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        tournament: PropTypes.bool,
        sparring: PropTypes.bool
    }))
};

const defaultProps = {
    games: []
};

/* eslint-disable react/prop-types */
const mapFn = ({ name, sparring, tournament }) => (
    <li key={name}>
        {name} <span>(
            {tournament && <strong>tournament</strong>}
            {sparring && <span>sparring</span>}
        )</span>
    </li>
);

const limit = 4;

const enhance = pure;

/* eslint-disable jsx-a11y/no-static-element-interactions */
const ListEventGames = ({ games }) => (
    <Reveal
        items={games}
        limit={limit}
    >
        {(revealed, reveal, items) => (
            <div className="list-event__games">
                <ul className="list-event__games-list">
                    {items.map(mapFn)}
                </ul>
                { !revealed && (
                    <span
                        onClick={reveal}
                        className="list-event__games-more mdl-color-text--light-blue-A200"
                    >
                        ...and {games.length - limit} more
                    </span>
                )}
            </div>
        )}
    </Reveal>
);

ListEventGames.propTypes = propTypes;
ListEventGames.defaultProps = defaultProps;

export default enhance(ListEventGames);
