import React from "react";
import EditContainer from "../containers/EditContainer"
import ViewHeader from "../../../components/View/ViewHeader";
import "./Edit.scss";

export const EditView = () => (
    <div className="edit">
        <ViewHeader
            title="Edit"
        />
        <EditContainer/>
    </div>
);

export default EditView;
