import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import DetailsStep from "../containers/GameDetailsContainer.jsx";
import RankingStep from "../containers/GameRankingContainer";
import IncomingEventsStep from "../containers/IncomingGamesContainer";
import StatisticsStep from "../containers/StatisticsContainer";

const propTypes = {
    router: PropTypes.object.isRequired,
    step: PropTypes.number.isRequired
};

const defaultProps = {
};

const enhance = pure;

const StepContent = ({ step, router }) => {
    if (step === 0) {
        return (
            <DetailsStep router={router} />
        );
    } else if (step === 1) {
        return (
            <RankingStep router={router} page={1} />
        );
    } else if (step === 2) {
        return (
            <IncomingEventsStep router={router} />
        );
    } else if (step === 3) {
        return (
            <StatisticsStep router={router} />
        );
    }

    return null;
};

StepContent.propTypes = propTypes;
StepContent.defaultProps = defaultProps;

export default enhance(StepContent);
