import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Drawer from "../components/Drawer";

const propTypes = {
    user: PropTypes.object
};

const defaultProps = {
    user: null
};

const mapStateToProps = ({ user }) => ({
    user
});

const enhance = connect(mapStateToProps);

const defaultLinks = [{
    icon: "home",
    label: "Home",
    path: "/"
}, {
    icon: "event",
    label: "Events",
    path: "/events"
}, {
    icon: "casino",
    label: "Games",
    path: "/games"
}];

const actions = [{
    label: "Login",
    icon: "lock_outline",
    path: "/login"
}, {
    label: "Create account",
    icon: "person_add",
    path: "/register"
}];

const profileLink = ({ name }) => ({
    label: "My profile",
    icon: "person",
    path: `/users/${name}`
});

class DrawerContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            links: defaultLinks
        };
    }

    componentWillReceiveProps(nextProps) {
        const nextUser = nextProps.user;
        const { user } = this.props;

        const loggedOut = nextUser === null && user !== null;
        const loggedIn = nextUser !== null && user === null;

        if (loggedOut) {
            this.setState({
                links: defaultLinks
            });
        } else if (loggedIn) {
            const links = [...defaultLinks];
            links.splice(1, 0, profileLink(nextUser));

            this.setState({
                links
            });
        }
    }

    render() {
        const { user } = this.props;
        const { links } = this.state;

        return (
            <Drawer
                user={user}
                links={links}
                actions={actions}
            />
        );
    }
}

DrawerContainer.propTypes = propTypes;
DrawerContainer.defaultProps = defaultProps;

export default enhance(DrawerContainer);
