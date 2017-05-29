import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Gravatar from "react-gravatar";
import { Link } from "react-router";
import Reveal from "../../../../../components/Reveal";
import DetailsSection from "../DetailsSection.jsx";

const propTypes = {
    list: PropTypes.array,
    organiser: PropTypes.object
};

const defaultProps = {
    list: null,
    organiser: null
};

const enhance = pure;

const Participants = ({ list, organiser }) => (
    <DetailsSection
        title="Participants"
        loading={!list}
    >
        {list && (
            <Reveal
                items={list}
                limit={8}
            >
                {({ revealed, reveal, items, left }) => (
                    <div className="event-participants">
                        <div className="event-participant event-participant--organiser">
                            <Link
                                to={`/users/${organiser.id}`}
                                className="event-participant__link"
                            >
                                <Gravatar
                                    email={organiser.email}
                                    size={48}
                                    rating="pg"
                                    default="identicon"
                                    className="event-participant__avatar"
                                    alt={`${organiser.username}'s avatar`}
                                />
                                <p>
                                    <span>Event organiser</span>
                                    {organiser.username}
                                </p>
                            </Link>
                        </div>
                        <ul className="event-participants__list">
                            {items.map(({ id, email, username }) => (
                                <li className="event-participant">
                                    <Link
                                        to={`/users/${id}`}
                                        className="event-participant__link"
                                        key={id}
                                    >
                                        <Gravatar
                                            email={email}
                                            size={24}
                                            rating="pg"
                                            default="identicon"
                                            className="event-participant__avatar"
                                            alt={`${username}'s avatar`}
                                        />
                                        {username}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        { !revealed && (
                            <span
                                onClick={reveal}
                                className="event-participants__more mdl-color-text--light-blue-A200"
                            >
                            ...and {left} more
                        </span>
                        )}
                    </div>
                )}
            </Reveal>
        )}
    </DetailsSection>
);

Participants.propTypes = propTypes;
Participants.defaultProps = defaultProps;

export default enhance(Participants);
