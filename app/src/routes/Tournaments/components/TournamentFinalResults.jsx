import React, { PureComponent } from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import { Table, TableHeader } from "react-mdl/lib";


const propTypes = {
    finalResults: PropTypes.array,
    tournamentId: PropTypes.number,
    getFinalResults: PropTypes.func
};

const defaultProps = {
    finalResults: [],
    tournamentId: 1,
    getFinalResults: () => {}
};

const enhance = pure;

class TournamentFinalResults extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const results = Object.keys(this.props.finalResults)
          .map(result => ({ place: result.place, user: result.user, points: result.points }));
        return (
            <div>
                <h1>Tournament Final Results</h1>
                <ul><h5>
                    {this.props.finalResults.map(result => <li key={result.id}>{result.place} {result.user.username} {result.points}</li>)}
                </h5></ul>
                {/*<Table*/}
                    {/*sortable*/}
                    {/*shadow={0}*/}
                  {/*//   rows={[*/}
                  {/*// { place: 1, user: "user name", points: 2 }*/}
                  {/*//   ]}*/}
                    {/*rows={results}*/}
                {/*>*/}
                    {/*<TableHeader*/}
                        {/*numeric*/}
                        {/*name="place"*/}
                        {/*tooltip="The place for the user"*/}
                    {/*>*/}
                    {/*Place*/}
                  {/*</TableHeader>*/}
                    {/*<TableHeader*/}
                        {/*name="user"*/}
                        {/*sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}*/}
                        {/*tooltip="The user"*/}
                    {/*>*/}
                  {/*User*/}
                {/*</TableHeader>*/}
                    {/*<TableHeader*/}
                        {/*numeric*/}
                        {/*name="points"*/}
                        {/*tooltip="Number of points earned by the user during the whole tournament"*/}
                    {/*>*/}
                  {/*Points*/}
                {/*</TableHeader>*/}

                {/*</Table>*/}

            </div>
        );
    }

}

TournamentFinalResults.propTypes = propTypes;
TournamentFinalResults.defaultProps = defaultProps;

export default enhance(TournamentFinalResults);
