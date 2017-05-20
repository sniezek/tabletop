import queryString from "query-string";

export const API_SERVER = "http://localhost:8080";

const generateQueryString = params => queryString.stringify(params);

class Api {
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.user = this.user.bind(this);
        this.games = this.games.bind(this);
        this.tournamentTypes = this.tournamentTypes.bind(this);
        this.finishedTournaments = this.finishedTournaments.bind(this);
        this.register = this.register.bind(this);
        this.initialRound = this.initialRound.bind(this);
        this.getState = this.getState.bind(this);
        this.setWinner = this.setWinner.bind(this);
        this.finishTournament = this.finishTournament.bind(this);
        this.events = this.events.bind(this);
        this.createEvent = this.createEvent.bind(this);
    }

    user() {
        return fetch(`${API_SERVER}/user`, {
            method: "POST",
            credentials: "include"
        });
    }

    login({ username, password }) {
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);

        return fetch(`${API_SERVER}/login`, {
            method: "POST",
            credentials: "include",
            body
        });
    }

    logout() {
        return fetch(`${API_SERVER}/logout`, {
            method: "POST",
            credentials: "include"
        });
    }

    games() {
        return fetch(`${API_SERVER}/games`, {
            method: "GET",
            credentials: "include"
        });
    }

    tournamentTypes() {
        return fetch(`${API_SERVER}/tournament/types`, {
            method: "GET",
            credentials: "include"
        });
    }

    finishedTournaments() {
        return fetch(`${API_SERVER}/tournament/finished`, {
            method: "GET",
            credentials: "include"
        });
    }

    setWinner(tournamentId, winner) {
        const body = JSON.stringify({
            tournamentId,
            winnerUsername: winner.username
        });

        const headers = new Headers({
            "Content-Type": "application/json"
        });

        return fetch(`${API_SERVER}/tournament/winner/`, {
            method: "POST",
            credentials: "include",
            headers,
            body
        });
    }

    initialRound(id) {
        return fetch(`${API_SERVER}/tournament/init/${id}`, {
            method: "GET",
            credentials: "include"
        });
    }

    getState(id) {
      return fetch(`${API_SERVER}/tournament/state/${id}`, {
        method: "GET",
        credentials: "include"
      });
    }

    nextRound(id) {
        return fetch(`${API_SERVER}/tournament/next/${id}`, {
            method: "GET",
            credentials: "include"
        });
    }

    register({ username, password, email }) {
        const body = JSON.stringify({
            username,
            password,
            email
        });

        const headers = new Headers({
            "Content-Type": "application/json"
        });

        return fetch(`${API_SERVER}/users`, {
            method: "POST",
            credentials: "include",
            headers,
            body
        });
    }

    events(filters = {}) {
        const qs = generateQueryString(filters);

        return fetch(`${API_SERVER}/events?${qs}`, {
            method: "GET",
            credentials: "include"
        });
    }

    createEvent(payload) {
        const body = JSON.stringify(payload);

        const headers = new Headers({
            "Content-Type": "application/json"
        });

        return fetch(`${API_SERVER}/events`, {
            method: "POST",
            credentials: "include",
            headers,
            body
        });
    }

    finishTournament(id) {
        return fetch(`${API_SERVER}/tournament/finish/${id}`, {
            method: "POST"
        });
    }

    getFinalResults(id) {
        return fetch(`${API_SERVER}/tournament/finalresults/${id}`, {
            method: "GET"
        });
    }

    giveUp(id) {
      return fetch(`${API_SERVER}/tournament/giveup/${id}`, {
         method: "POST",
          credentials: "include"
      });
    }
}

export default new Api();
