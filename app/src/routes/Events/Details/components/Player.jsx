import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import IconButton from "react-mdl/lib/IconButton";
import Gravatar from "react-gravatar";

const propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    accept: PropTypes.func,
    revoke: PropTypes.func
};

const defaultProps = {
    accept: null,
    revoke: null
};

const enhance = pure;

const Player = ({ username, email, accept, revoke }) => (
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
            <span className="player__event">62 Episodes</span>
        </div>
        <div className="player__ctas">
            {accept && (
                <IconButton
                    name="check"
                    className="player-cta player-cta--accept"
                    onClick={() => accept()}
                />
            )}
            {revoke && (
                <IconButton
                    name="clear"
                    className="player-cta player-cta--revoke"
                    onClick={() => revoke()}
                />
            )}
        </div>
    </div>
);

Player.propTypes = propTypes;
Player.defaultProps = defaultProps;

export default enhance(Player);
