import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Api from "../../../../api";
import CreateEventForm from "../components/CreateEventForm.jsx";

const propTypes = {
    user: PropTypes.object,
    router: PropTypes.object.isRequired,
    event: PropTypes.object
};

const defaultProps = {
    user: null,
    event: null
};

const steps = 3;

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = {};

const enhance = connect(mapStateToProps, mapDispatchToProps);

const initialState = {
    step: 0,
    location: null,
    name: "",
    description: "",
    sparrings: [],
    tournaments: [],
    loading: false,
    model: null,
    type: null
};

class CreateEventFormContainer extends PureComponent {
    constructor(props) {
        super(props);

        if (props.event) {
            const { lat, lng, name } = props.event.location;

            this.state = {
                ...initialState,
                ...props.event,
                location: {
                    lat,
                    lng,
                    label: name
                }
            };
        } else {
            this.state = {
                ...initialState
            };
        }

        this.geosuggest = null;
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
        this.close = this.close.bind(this);
        this.toggleSparringParticipation = this.toggleSparringParticipation.bind(this);
        this.toggleTournamentParticipation = this.toggleTournamentParticipation.bind(this);
        this.setRef = this.setRef.bind(this);
        this.clearInput = this.clearInput.bind(this);
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

    setLocation(location) {
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

    setRef(geosuggest) {
        this.geosuggest = geosuggest;
    }

    close(value) {
        if (value) {
            const { type, payload } = value;

            if (type === "tournament") {
                this.setState({
                    tournaments: this.updateCollection(this.state.tournaments, payload)
                });
            } else if (type === "sparring") {
                this.setState({
                    sparrings: this.updateCollection(this.state.sparrings, payload)
                });
            }
        }

        this.setState({
            model: null,
            type: null
        });
    }

    updateCollection(collection, payload) {
        const { model } = this.state;
        const data = [...collection];

        if (model) {
            const index = data.indexOf(model);

            if (index !== -1) {
                data[index] = payload;
            }
        } else {
            data.push(payload);
        }

        return data;
    }

    filterUID(arr) {
        return arr.map(({ __uid, ...rest }) => rest);
    }

    clearInput(value) {
        const { location } = this.state;

        if (location !== null && location.label !== value) {
            this.geosuggest.clear();

            this.setState({
                location: null
            });
        }
    }

    create() {
        const { loading } = this.state;

        if (!loading) {
            this.setState({
                loading: true
            });

            const { name, description, sparrings, tournaments, location } = this.state;
            const edit = !!this.props.event;

            const payload = {
                name,
                location: {
                    ...location.location,
                    name: location.label
                },
                description,
                sparrings: this.filterUID(sparrings),
                tournaments: this.filterUID(tournaments)
            };

            let method;

            if (edit) {
                payload.id = this.props.event.id;
                method = Api.editEvent;
            } else {
                method = Api.createEvent;
            }

            method.call(null, payload).then((response) => {
                response.json().then(({ id }) => {
                    this.setState({
                        loading: false
                    });

                    const { router } = this.props;
                    router.push(`/events/${id}`);
                });
            });
        }
    }

    toggleParticipation(collection, item) {
        const data = [...collection];
        const index = data.indexOf(item);
        const users = [];

        if (item.users.length === 0) {
            users.push({ id: this.props.user.id });
        }

        data[index] = {
            ...data[index],
            users
        };

        return data;
    }

    toggleSparringParticipation(sparring) {
        this.setState({
            sparrings: this.toggleParticipation(this.state.sparrings, sparring)
        });
    }

    toggleTournamentParticipation(tournament) {
        this.setState({
            tournaments: this.toggleParticipation(this.state.tournaments, tournament)
        });
    }

    prevStep() {
        this.setStep(this.state.step - 1);
    }

    nextStep() {
        this.setStep(this.state.step + 1);
    }

    addTournament() {
        this.setState({
            model: null,
            type: "tournament"
        });
    }

    addSparring() {
        this.setState({
            model: null,
            type: "sparring"
        });
    }

    removeTournament(tournament) {
        const tournaments = [...this.state.tournaments];
        const index = tournaments.indexOf(tournament);
        tournaments.splice(index, 1);

        this.setState({
            tournaments
        });
    }

    removeSparring(sparring) {
        const sparrings = [...this.state.sparrings];
        const index = sparrings.indexOf(sparring);
        sparrings.splice(index, 1);

        this.setState({
            sparrings
        });
    }

    editTournament(model) {
        this.setState({
            model,
            type: "tournament"
        });
    }

    editSparring(model) {
        this.setState({
            model,
            type: "sparring"
        });
    }

    render() {
        const { step, location, name, description, loading, sparrings, tournaments, model, type } = this.state;

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
                model={model}
                type={type}
                close={this.close}
                toggleSparringParticipation={this.toggleSparringParticipation}
                toggleTournamentParticipation={this.toggleTournamentParticipation}
                clearInput={this.clearInput}
                setRef={this.setRef}
                edit={!!this.props.event}
            />
        );
    }
}

CreateEventFormContainer.propTypes = propTypes;
CreateEventFormContainer.defaultProps = defaultProps;

export default enhance(CreateEventFormContainer);
