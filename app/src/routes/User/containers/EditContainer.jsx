import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editMail, editPass } from "../../../store/edit";
import EditForm from "../components/EditForm"
import CardForm from "../../../components/CardForm/CardForm"

const propTypes = {
    editMail: PropTypes.func.isRequired,
    editPass: PropTypes.func.isRequired,
    user: PropTypes.object,
    //router: PropTypes.object.isRequired
};

const defaultProps = {
    user: null
};

const mapDispatchToProps = dispatch => ({
    editMail,
    editPass
});

const mapStateToProps = ({ user }) => ({ user });

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EditContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            loading: false
        };

        this.editMail = this.editMail.bind(this);
        this.editPass = this.editPass.bind(this);
        // this.redirect = this.redirect.bind(this);
    }

    editMail() {
        console.log("CHUJ");
    }

    editPass() {
        console.log("CHUJ");
    }

    render() {
        const { loading, password } = this.state;

        return (
            <EditForm
                editMail={editMail}
                editPass={editPass}
            />
            // <CardForm
            //     title="Log in"
            //     loading={loading}
            //     actions={}
            //     className="login"
            // >
            // <Edit
            //     loading={loading}
            //     password={password}
            //     edit={this.edit}
            //     setPassword={this.setPassword}
            // />
        );
    }
}

EditContainer.propTypes = propTypes;
EditContainer.defaultProps = defaultProps;

export default enhance(EditContainer);
