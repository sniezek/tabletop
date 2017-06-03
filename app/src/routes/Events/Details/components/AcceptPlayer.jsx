import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import IconButton from "react-mdl/lib/IconButton";
import Gravatar from "react-gravatar";
import "./AcceptPlayers.scss";

const propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    accept: PropTypes.func.isRequired,
    revoke: PropTypes.func.isRequired
};

const enhance = pure;

const AcceptPlayer = ({ username, email, accept, revoke }) => (
    <div className="accept-player">
        <Gravatar
            email={email}
            size={48}
            rating="pg"
            default="identicon"
            className="accept-player__avatar"
            alt={`${username}'s avatar`}
        />
        <div className="accept-player__details">
            <span className="accept-player__username">{username}</span>
            <span className="accept-player__event">62 Episodes</span>
        </div>
        <div className="accept-player__ctas">
            <IconButton
                name="check"
                className="accept-player-cta accept-player-cta--accept"
                onClick={() => accept()}
            />
            <IconButton
                name="clear"
                className="accept-player-cta accept-player-cta--revoke"
                onClick={() => revoke()}
            />
        </div>
    </div>
);

AcceptPlayer.propTypes = propTypes;

export default enhance(AcceptPlayer);
