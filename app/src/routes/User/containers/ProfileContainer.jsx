import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router';

const propTypes = {
    user: PropTypes.object
};

const defaultProps = {
    user: null
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = {};

const enhance = connect(mapStateToProps, mapDispatchToProps);

class ProfileContainer extends PureComponent {
    render() {
        const { name, email } = this.props.user;

        return (
            <div>
                <section className="profile-section section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                    <header className="imageSection section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--blue-grey-50 mdl-color-text--white"></header>
                    <div className="mdl-card mdl-cell mdl-cell--9-col mdl-cell--4-col-phone mdl-cell--6-col-tablet">
                        <div className="mdl-card__supporting-text">
                            <h4>Information</h4>
                            <div>
                                <span><i className="material-icons icon-textfield__icon black">person</i> Name: {name}</span>
                            </div>
                            <div>
                                <span><i className="material-icons icon-textfield__icon black">email</i> Email: {email}</span>
                            </div>
                        </div>
                        <div className="mdl-card__actions">
                            <Link className="mdl-button mdl-js-button" href="/users/edit" data-upgraded=",MaterialButton">
                                Edit account
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="profile-section section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                    <div className="mdl-card mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--6-col-tablet">
                        <div className="mdl-card__supporting-text">
                            <h4>Statistics</h4>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

ProfileContainer.propTypes = propTypes;
ProfileContainer.defaultProps = defaultProps;

export default enhance(ProfileContainer);
