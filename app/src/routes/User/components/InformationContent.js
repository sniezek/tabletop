import React from "react";
import { Link } from 'react-router';
import "./Profile.scss";

export const InformationContent = ({name, email}) => (
    <div className="mdl-card__supporting-text">
        <h4>Information</h4>
        <div>
            <span><i className="material-icons icon-textfield__icon black">person</i> Name: {name}</span>
        </div>
        <div>
            <span><i className="material-icons icon-textfield__icon black">email</i> Email: {email}</span>
        </div>
    </div>
);

export default InformationContent;
