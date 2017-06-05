import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Information from '../components/Information';
import Statistics from '../components/Statistics';

const propTypes = {
    user: PropTypes.object
};

const defaultProps = {
    user: null
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = {};

const enhance = connect(mapStateToProps, mapDispatchToProps);

class ProfileContainer extends React.Component {
    render() {
        const { name, email } = this.props.user;

        return (
            <div>
                <Information name={name} email={email} />
                <Statistics />
            </div>
        );
    }
}

ProfileContainer.propTypes = propTypes;
ProfileContainer.defaultProps = defaultProps;

export default enhance(ProfileContainer);
