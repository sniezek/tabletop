import React from "react";
import { Link } from 'react-router';
import "./Profile.scss";

export const EditButton = () => (
    <div className="mdl-card__actions">
        <Link className="mdl-button mdl-js-button" href="/users/edit" data-upgraded=",MaterialButton">
            Edit account
        </Link>
    </div>
);

export default EditButton;
