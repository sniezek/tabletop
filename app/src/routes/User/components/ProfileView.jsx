import React from "react";
import ProfileContainer from "../containers/ProfileContainer"
import ViewHeader from "../../../components/View/ViewHeader";
import "./Profile.scss";

export const ProfileView = () => (
    <div className="profile">
        <ViewHeader
            title="Profile"
        />
        <ProfileContainer/>
    </div>
);

export default ProfileView;
