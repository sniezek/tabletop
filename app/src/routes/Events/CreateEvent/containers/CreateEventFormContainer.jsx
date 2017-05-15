import React, { PureComponent } from "react";
import CreateEventForm from "../components/CreateEventForm.jsx";

const steps = 3;

class CreateEventFormContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            step: 0
        };

        this.prevStep = this.prevStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.setStep = this.setStep.bind(this);
    }

    setStep(step) {
        if (step >= 0 && step < steps) {
            this.setState({
                step
            });
        }
    }

    prevStep() {
        this.setStep(this.state.step - 1);
    }

    nextStep() {
        this.setStep(this.state.step + 1);
    }

    render() {
        const { step } = this.state;

        return (
            <CreateEventForm
                step={step}
                steps={steps}
                setStep={this.setStep}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
            />
        );
    }
}

export default CreateEventFormContainer;
