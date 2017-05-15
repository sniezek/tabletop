import React, { PureComponent } from "react";
import Api from "../../../../api";
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
            sparrings: [],
            tournaments: [],
            loading: false
        };

        this.prevStep = this.prevStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.setStep = this.setStep.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setName = this.setName.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.create = this.create.bind(this);
        this.addSparring = this.addSparring.bind(this);
        this.addTournament = this.addTournament.bind(this);
        this.editSparring = this.editSparring.bind(this);
        this.editTournament = this.editTournament.bind(this);
        this.removeSparring = this.removeSparring.bind(this);
        this.removeTournament = this.removeTournament.bind(this);
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

            const { name, location, description, sparrings, tournaments } = this.state;

            const payload = {
                name,
                location,
                description,
                sparrings,
                tournaments
            };

            Api.createEvent(payload).then(() => {
                this.setState({
                    loading: false
                });
            });
        }
    }

    prevStep() {
        this.setStep(this.state.step - 1);
    }

    nextStep() {
        this.setStep(this.state.step + 1);
    }

    addTournament() {

    }

    addSparring() {

    }

    removeTournament() {

    }

    removeSparring() {

    }

    editTournament() {

    }

    editSparring() {

    }

    render() {
        const { step, location, name, description, loading, sparrings, tournaments } = this.state;

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
                sparrings={sparrings}
                tournaments={tournaments}
                addTournament={this.addTournament}
                addSparring={this.addSparring}
                editTournament={this.editTournament}
                editSparring={this.editSparring}
                removeTournament={this.removeTournament}
                removeSparring={this.removeSparring}
            />
        );
    }
}

export default CreateEventFormContainer;
