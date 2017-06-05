import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import IconButton from "react-mdl/lib/IconButton";
import Gravatar from "react-gravatar";

const propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    accept: PropTypes.func,
    revoke: PropTypes.func,
    id: PropTypes.number.isRequired,
    match: PropTypes.object
};

const defaultProps = {
    accept: null,
    revoke: null,
    match: {}
};

const enhance = pure;

const Player = ({ id, username, email, accept, revoke, match }) => (
    <div className="player">
        <Gravatar
            email={email}
            size={48}
            rating="pg"
            default="identicon"
            className="player__avatar"
            alt={`${username}'s avatar`}
        />
        <div className="player__details">
            <span className="player__username">{username}</span>
            {match.name && (
                <span className="player__event">{match.name}</span>
            )}
        </div>
        <div className="player__ctas">
            {accept && (
                <IconButton
                    name="check"
                    className="player-cta player-cta--accept"
                    onClick={() => accept(id, match)}
                />
            )}
            {revoke && (
                <IconButton
                    name="clear"
                    className="player-cta player-cta--revoke"
                    onClick={() => revoke(id, match)}
                />
            )}
        </div>
    </div>
);

Player.propTypes = propTypes;
Player.defaultProps = defaultProps;

export default enhance(Player);
