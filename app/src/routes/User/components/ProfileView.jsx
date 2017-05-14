import React from "react";
import ProfileContainer from "../containers/EditContainer"
import PageHeader from "../../../components/PageHeader";
import "./Profile.scss";

export const ProfileView = () => (
    <div className="profile">
        <PageHeader
            title="Profile"
        />
    </div>
);

export default ProfileView;
