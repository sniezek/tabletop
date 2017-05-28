import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { List, ListItem, ListItemContent, Tooltip, FABButton, Chip, ChipContact } from "react-mdl/lib";
import { FaCalendar, FaTrophy, FaBeer } from "react-icons/lib/fa";
import { MdPlace } from "react-icons/lib/md";
import "./GameStats.scss";

import "./GameDetails.scss";

const propTypes = {
    gameStats: PropTypes.object.isRequired
};


const enhance = pure;

export const GameStats = gameStats => (
    <div>
        <div className="gameStatContainer" >
            <div className="statBadge">
                <Tooltip label="Number of events" position="bottom">
                    <FABButton style={{ background: "#757575" }}>
                        <FaCalendar size={40} color="#fff" />
                    </FABButton>
                </Tooltip>
                <span> {gameStats.gameStats.eventsCount} </span>
            </div>
            <div className="statBadge">
                <Tooltip label="Number of tournaments" position="bottom">
                    <FABButton style={{ background: "#757575" }}>
                        <FaTrophy size={40} color="#fff" />
                    </FABButton>
                </Tooltip>
                <span> {gameStats.gameStats.tournamentsCount} </span>
            </div>
            <div className="statBadge">
                <Tooltip label="Number of sparrings" position="bottom">
                    <FABButton style={{ background: "#757575" }}>
                        <FaBeer size={40} color="#fff" />
                    </FABButton>
                </Tooltip>
                <span> {gameStats.gameStats.sparringsCount} </span>
            </div>
        </div>
        <div className="gameStatContainer">
            <div>
                <List className="locationList">
                    <h3>Most frequent locations </h3>
                    {gameStats.gameStats.topLocations.map(({ name, address }) =>
                        <ListItem key={name} style={{ padding: "5px" }}>
                            <ListItemContent>
                                <Chip>
                                    <ChipContact className="mdl-color--teal mdl-color-text--white" ><MdPlace /></ChipContact>
                                    {name} - {address}
                                </Chip>

                            </ListItemContent>
                        </ListItem>
                    )}
                </List>
            </div>
        </div>

    </div>
);

GameStats.propTypes = propTypes;

export default enhance(GameStats);
