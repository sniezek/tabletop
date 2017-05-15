import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListItemDialog from "../components/ListItemDialog.jsx";

const initialState = {
    startDate: "",
    endDate: "",
    type: "standard",
    name: "",
    minPlayers: 0,
    maxPlayers: 2
};

const propTypes = {
    model: PropTypes.object,
    type: PropTypes.string,
    close: PropTypes.func.isRequired
};

const defaultProps = {
    model: null,
    type: null
};

class ListItemDialogContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            ...initialState
        };
    }

    save() {
        this.props.close();
    }

    render() {
        return (
            <ListItemDialog
                {...this.state}
                {...this.props}
                save={this.save}
            />
        );
    }
}

ListItemDialogContainer.propTypes = propTypes;
ListItemDialogContainer.defaultProps = defaultProps;

export default ListItemDialogContainer;
