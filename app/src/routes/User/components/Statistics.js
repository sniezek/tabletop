import React from "react";
import "./Profile.scss";

export const Statistics = () => (
    <section className="profile-section section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div className="mdl-card mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--6-col-tablet">
            <div className="mdl-card__supporting-text statistics">
                <h4>Statistics</h4>
                <div className="mdl-cell mdl-cell--10-col mdl-cell--3-col-phone mdl-cell--6-col-tablet section__text">
                    <h5>Participations in events <span>0</span></h5>
                    <span>Number of times the user participated in events.</span>
                </div>
                <div className="mdl-cell mdl-cell--10-col mdl-cell--3-col-phone mdl-cell--6-col-tablet section__text">
                    <h5>Organized events <span>0</span></h5>
                    <span>Number of events organized by the user.</span>
                </div>
                <div className="mdl-cell mdl-cell--10-col mdl-cell--3-col-phone mdl-cell--6-col-tablet section__text">
                    <h5>Games with participation in a sparring/tournament <span>0</span></h5>
                    <span>Number of games in which user played a sparring or a tournament.</span>
                </div>
            </div>
        </div>
    </section>
);

export default Statistics;
