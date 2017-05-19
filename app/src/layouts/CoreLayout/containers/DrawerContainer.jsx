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

    icon: "people",
    label: "Tournaments",
    path: "/tournament"
}, {
    icon: "casino",
    label: "Games",
    path: "/games"
}, {
    icon: "flag",
    label: "Achievements",
    path: "/achievements"
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

const extendedLinks = ({ name }) => {
    const item = {
        label: "My profile",
        icon: "person",
        path: `/users/${name}`
    };

    const links = [...defaultLinks];
    links.splice(1, 0, item);
    return links;
};

class DrawerContainer extends PureComponent {
    constructor(props) {
        super(props);

        const loggedIn = props.user !== null;
        const links = loggedIn ? extendedLinks(props.user) : defaultLinks;

        this.state = {
            links
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
            this.setState({
                links: extendedLinks(nextUser)
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
