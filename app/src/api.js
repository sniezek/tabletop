export const API_SERVER = "http://localhost:8080";

class Api {
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.user = this.user.bind(this);
        this.games = this.games.bind(this);
        this.tournamentypes = this.tournamentypes.bind(this);
        this.finishedtournaments = this.finishedtournaments.bind(this);
        this.register = this.register.bind(this);
        this.initialRound = this.initialRound.bind(this);
        this.setWinner = this.setWinner.bind(this);
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

    tournamentypes() {
        return fetch(`${API_SERVER}/tournament/types`, {
            method: "GET",
            credentials: "include"
        });
    }

    finishedtournaments() {
        return fetch(`${API_SERVER}/tournament/finished`, {
            method: "GET",
            credentials: "include"
        });
    }

    setWinner(id, winner) {
      const body = JSON.stringify({
        id,
        winner
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
            method: "GET"
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
}

export default new Api();
