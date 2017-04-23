export const API_SERVER = "http://localhost:8080";

class Api {
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.user = this.user.bind(this);
        this.register = this.user.bind(this);
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

    register({ username, password }) {
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);
        console.log(body);
        return fetch(`${API_SERVER}/users`, {
            method: "POST",
            credentials: "include",
            body
        });
    }
}

export default new Api();
