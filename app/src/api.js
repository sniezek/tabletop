import queryString from "query-string";

export const API_SERVER = "http://localhost:8080";
export const ACHI_SERVER = "http://localhost:9000";

class Api {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.user = this.user.bind(this);
    this.games = this.games.bind(this);
    this.register = this.register.bind(this);
    this.events = this.events.bind(this);
    this.achievements = this.achievements.bind(this);
    this.newAchievements = this.newAchievements.bind(this);
    this.allAchivements = this.allAchivements.bind(this);
  }


  achievements(userID) {
    return fetch(`${ACHI_SERVER}/achi/${userID}`, {
      method: "GET",
      credentials: "include"
    });
  }

  newAchievements(userID) {
    return fetch(`${ACHI_SERVER}/newAchivements/${userID}`, {
      method: "GET",
      credentials: "include"
    });
  }

  allAchivements() {
    return fetch(`${ACHI_SERVER}/allAchivements`, {
      method: "GET",
      credentials: "include"
    });
  }

  user() {
    console.log("TEST");
    return fetch(`${API_SERVER}/user`, {
      method: "POST",
      credentials: "include"
    });
  }

  login({username, password}) {
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

  register({username, password, email}) {
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
}

export default new Api();
