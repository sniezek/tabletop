import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import StepHeader from "../components/StepHeader";
import StepContent from "../components/StepContent";

const steps = 4;

const propTypes = {
    router: PropTypes.object.isRequired
};

const defaultProps = {
};

const mapDispatchToProps = () => ({
});

const mapStateToProps = () => ({
});
const enhance = connect(mapStateToProps, mapDispatchToProps);

class GameInfoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { step: 0 };
        this.setStep = this.setStep.bind(this);
    }


    setStep(step) {
        if (step >= 0 && step < steps) {
            this.setState({
                step
            });
        }
    }

    render() {
        const { step } = this.state;
        return (
            <div>
                <StepHeader
                    step={step}
                    setStep={this.setStep}
                />
                <section>
                    <div className="content">
                        <StepContent
                            router={this.props.router}
                            step={step}
                        />
                    </div>
                </section>
            </div>

        );
    }
}

GameInfoContainer.propTypes = propTypes;
GameInfoContainer.defaultProps = defaultProps;

export default enhance(GameInfoContainer);
