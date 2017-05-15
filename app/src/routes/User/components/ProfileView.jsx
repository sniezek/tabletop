import React from "react";
import ProfileContainer from "../containers/ProfileContainer"
import PageHeader from "../../../components/PageHeader";
import "./Profile.scss";

export const ProfileView = () => (
    <div className="profile">
        <PageHeader
            title="Profile"
        />
        <ProfileContainer/>
    </div>
);

export default ProfileView;
