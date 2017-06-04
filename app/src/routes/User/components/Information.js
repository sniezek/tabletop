import React from "react";
import { Link } from 'react-router';
import InformationContent from './InformationContent';
import EditButton from './EditButton';
import "./Profile.scss";

export const Information = ({name, email}) => (
    <section className="profile-section section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <header className="imageSection section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--blue-grey-50 mdl-color-text--white"></header>
        <div className="mdl-card mdl-cell mdl-cell--9-col mdl-cell--4-col-phone mdl-cell--6-col-tablet">
            <InformationContent name={name} email={email} />
            <EditButton />
        </div>
    </section>
);

export default Information;
