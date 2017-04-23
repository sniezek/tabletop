import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getGames} from "../../../store/games";

const propTypes = {
  gamesList : PropTypes.array,
  getGames : PropTypes.func.isRequired
}


const defaultProps = {
  gamesList : [],
  getGames: () => {}
}

const mapDispatchToProps = {
  getGames
};

const mapStateToProps = ({}) => ({});

class GamesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.getGames = this.getGames.bind(this);
    }

    getGames(){
       this.props.getGames(({ok}) => {
            if (!ok) {
              console.log("Passing To Next Round failed")
            }
          });
    }

    render() {
        return (
            <div className="gamesList">
              <h1>Games </h1>
                     <ol>
                       <li>
                          CHESS
                        </li>
                      </ol>
            </div>
        );
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
