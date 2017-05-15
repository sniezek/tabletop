/**
 * Created by ja on 07.05.17.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAchievements, getNewAchievements, getAllAchievements} from "../../../store/achievements";
import {Button, Snackbar} from 'react-mdl';

const propTypes = {
  user: PropTypes.object,
  getAchievements: () => {
  },
  getNewAchievements: () => {
  },
  // getAllAchievements:() => {},
  achievements: PropTypes.array,
  newAchievements: PropTypes.array,
  allAchievements: PropTypes.array


};

const defaultProps = {
  user: null,
  achievements: [],
  newAchievements: [],
  allAchievements: []
};

const mapDispatchToProps = dispatch => ({
  getAchievements: callback => getAchievements(callback)(dispatch),
  getNewAchievements: callback => getNewAchievements(callback)(dispatch),
  getAllAchievements: getAllAchievements(dispatch)
});

const mapStateToProps = ({user, achievements, newAchievements, allAchievements}) => ({
  user,
  achievements,
  newAchievements,
  allAchievements
});


const enhance = connect(mapStateToProps, mapDispatchToProps);

function arr_diff (a1, a2) {

  var diff = [];


  for (var i = 0; i < a1.length; i++) {
    for (var j = 0; j < a2.length; j++) {
      if (a2[j].name !== a1[i].name) {
        diff.push(a1[i])
      }
    }
  }
  return diff;
};
class AchievementsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.state = {isSnackbarActive: false};
    this.getAchievements = this.getAchievements.bind(this);
    this.getNewAchievements = this.getNewAchievements.bind(this);
    // this.getAllAchievements = this.getAllAchievements.bind(this);
    this.updateSnack = this.updateSnack.bind(this);
  }

  componentDidMount() {

    // this.getAllAchievements();
    const {user} = this.props;
    if (user !== null) {
      this.getAchievements();
      this.getNewAchievements();
      this.updateSnack();
    }

  }


  componentWillReceiveProps({newAchievements}) {
    this.updateSnack();
  }

  updateSnack() {
    const {newAchievements} = this.props;
    console.log(newAchievements)
    if (typeof newAchievements != "undefined" && newAchievements != null && newAchievements.length > 0) {
      this.setState({isSnackbarActive: true});
    }
  }

  getAchievements() {
    const {user} = this.props;
    this.props.getAchievements(user.id)
  }

  getNewAchievements() {
    const {user} = this.props;
    this.props.getNewAchievements(user.id)
  }

  getAllAchievements() {
    this.props.getAllAchievements()
  }

  handleShowSnackbar() {
    this.props.newAchievements = null;
    this.setState({
      isSnackbarActive: true,
    });

  }

  handleTimeoutSnackbar() {
    this.setState({isSnackbarActive: false});
  }


  render() {

    const {achievements, newAchievements, allAchievements} = this.props;
    const {isSnackbarActive} = this.state;

    if (achievements !== null) {
      const diff =arr_diff (allAchievements,achievements);
      return (
        <div className="achievementsList">
          <h2>Achievments</h2>

          {achievements.map(achievement =>
            <section key={achievement.name}
                     className="achievementsSection section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
              <header
                className="imageSection section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--blue-grey-50 mdl-color-text--white">
                <img className="tileImageAquired" src={achievement.imageURL}/>
              </header>
              <div
                className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                  <h4>{achievement.name}</h4>


                  <div className="achievementsDescription">
                    {achievement.description}
                  </div>

                </div>
              </div>

            </section>
          )
          }
          {diff.map(achievement =>
            <section key={achievement.name}
                     className="achievementsSection section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
              <header
                className="imageSection section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--blue-grey-50 mdl-color-text--white">
                <img className="tileImage" src={achievement.imageURL}/>
              </header>
              <div
                className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                  <h4>{achievement.name}</h4>


                  <div className="achievementsDescription">
                    {achievement.description}
                  </div>

                </div>
              </div>

            </section>
          )
          }

          <Snackbar
            active={isSnackbarActive}
            onTimeout={this.handleTimeoutSnackbar}>
            <table>
              <tbody>
              <tr>
                <th>
                  <img className="tileImageAquired" src={newAchievements.imageURL} width={80} height={80}/>
                </th>
                <th>
                  <h4>{newAchievements.name}</h4>
                  <br/> {newAchievements.description}

                </th>
              </tr>
              </tbody>

            </table>
          </Snackbar>

        </div>
      );
    } else if( allAchievements !== null){
      return (<div className="achievementsList">
          <h2>Achievments</h2>

          {allAchievements.map(achievement =>
            <section key={achievement.name}
                     className="achievementsSection section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
              <header
                className="imageSection section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--blue-grey-50 mdl-color-text--white">
                <img className="tileImage" src={achievement.imageURL}/>
              </header>
              <div
                className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                  <h4>{achievement.name}</h4>


                  <div className="achievementsDescription">
                    {achievement.description}
                  </div>

                </div>
              </div>

            </section>
          )
          }
        </div>
      );
    }else {
      return (<div className="achievementsList">
        <h2>Achievments</h2>
      </div>)
    }
  }
}

AchievementsContainer.propTypes = propTypes;
AchievementsContainer.defaultProps = defaultProps;

export default enhance(AchievementsContainer);
