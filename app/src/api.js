export const API_SERVER = "http://localhost:8080";

class Api {
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.user = this.user.bind(this);
        this.games = this.games.bind(this);
        this.register = this.register.bind(this);
        this.events = this.events.bind(this);
    }

    user() {
        console.log("TEST");
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

    events() {
        return fetch(`${API_SERVER}/events`, {
            method: "GET",
            credentials: "include"
        });
    }

    edit() {
        return fetch();
    }
}

export default new Api();
