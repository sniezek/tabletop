import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Reveal from "../../../components/Reveal";

const propTypes = {
    tournaments: PropTypes.array,
    sparrings: PropTypes.array
};

const defaultProps = {
    tournaments: [],
    sparrings: []
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

const group = (tournaments, sparrings) => {
    const map = new Map();

    /* eslint-disable no-return-assign */
    tournaments.forEach(({ gameName }) => map.set(gameName, { name: gameName, tournament: true, sparring: false }));
    sparrings.forEach(({ gameName }) => (
        map.has(gameName) ?
        map.get(gameName).sparring = true :
        map.set(gameName, { name: gameName, tournament: false, sparring: true })
    ));

    return Array.from(map.values());
};

const limit = 4;

const enhance = pure;

/* eslint-disable jsx-a11y/no-static-element-interactions */
const ListEventGames = ({ tournaments, sparrings }) => (
    <Reveal
        items={group(tournaments, sparrings)}
        limit={limit}
    >
        {({ revealed, reveal, items, left }) => (
            <div className="list-event__games">
                <ul className="list-event__games-list">
                    {items.map(mapFn)}
                </ul>
                { !revealed && (
                    <span
                        onClick={reveal}
                        className="list-event__games-more mdl-color-text--light-blue-A200"
                    >
                        ...and {left} more
                    </span>
                )}
            </div>
        )}
    </Reveal>
);

ListEventGames.propTypes = propTypes;
ListEventGames.defaultProps = defaultProps;

export default enhance(ListEventGames);
