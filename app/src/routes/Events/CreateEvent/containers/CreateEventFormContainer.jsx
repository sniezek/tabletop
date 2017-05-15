import React, { PureComponent } from "react";
import CreateEventForm from "../components/CreateEventForm.jsx";

const steps = 3;

class CreateEventFormContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            step: 0,
            location: "",
            name: "",
            description: "",
            loading: false
        };

        this.prevStep = this.prevStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.setStep = this.setStep.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setName = this.setName.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.create = this.create.bind(this);
    }

    setDescription({ target }) {
        const description = target.value;

        this.setState({
            description
        });
    }

    setName({ target }) {
        const name = target.value;

        this.setState({
            name
        });
    }

    setLocation({ target }) {
        const location = target.value;

        this.setState({
            location
        });
    }

    setStep(step) {
        if (step >= 0 && step < steps) {
            this.setState({
                step
            });
        }
    }

    create() {
        const { loading } = this.state;

        if (!loading) {
            this.setState({
                loading: true
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
        const { step, location, name, description, loading } = this.state;

        return (
            <CreateEventForm
                step={step}
                steps={steps}
                setStep={this.setStep}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                setLocation={this.setLocation}
                setDescription={this.setDescription}
                setName={this.setName}
                location={location}
                name={name}
                description={description}
                create={this.create}
                loading={loading}
            />
        );
    }
}

export default CreateEventFormContainer;
