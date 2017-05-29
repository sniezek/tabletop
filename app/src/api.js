import queryString from "query-string";

export const API_SERVER = "http://localhost:8080";
export const ACHI_SERVER = "http://localhost:9000";

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
        this.editMail = this.editMail.bind(this);
        this.editPass = this.editPass.bind(this);
        this.achievements = this.achievements.bind(this);
        this.newAchievements = this.newAchievements.bind(this);
        this.allAchivements = this.allAchivements.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.user = this.user.bind(this);
        this.games = this.games.bind(this);
        this.tournamentTypes = this.tournamentTypes.bind(this);
        this.finishedTournaments = this.finishedTournaments.bind(this);
        this.register = this.register.bind(this);
        this.initialRound = this.initialRound.bind(this);
        this.setWinner = this.setWinner.bind(this);
        this.finishTournament = this.finishTournament.bind(this);
        this.events = this.events.bind(this);
        this.createEvent = this.createEvent.bind(this);
        this.remind = this.remind.bind(this);
        this.reset = this.reset.bind(this);
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

    game(name) {
        return fetch(`${API_SERVER}/games/${name}`, {
            method: "GET",
            credentials: "include"
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

    ranking(gameName) {
        return fetch(`${API_SERVER}/rankings/${gameName}`, {
            method: "GET",
            credentials: "include"
        });
    }

    remind({ email }) {
        const body = JSON.stringify({
            email
        });

        const headers = new Headers({
            "Content-Type": "application/json"
        });

        return fetch(`${API_SERVER}/user/remind`, {
            method: "PUT",
            credentials: "include",
            headers,
            body
        });
    }

    editMail({ username, email, password }) {
        const body = JSON.stringify({
            username,
            email,
            password
        });

        const headers = new Headers({
            "Content-Type": "application/json"
        });

        return fetch(`${API_SERVER}/user/editmail`, {
            method: "PUT",
            credentials: "include",
            headers,
            body
        });
    }

    editPass({ username, email, password }) {
        const body = JSON.stringify({
            username,
            email,
            password
        });

        const headers = new Headers({
            "Content-Type": "application/json"
        });

        return fetch(`${API_SERVER}/user/editpassword`, {
            method: "PUT",
            credentials: "include",
            headers,
            body
        });
    }

    reset({token, id}) {

        const headers = new Headers({
            "Content-Type": "application/json"
        });

        return fetch(`${API_SERVER}/user/reset?token=${token}&id=${id}`, {
            method: "POST",
            credentials: "include",
            headers,
        })
    }

    changePassword({ password }) {

        const headers = new Headers({
            "Content-Type": "application/json"
        });

        const body = JSON.stringify({
                    id,
                    password
                });

        return fetch(`${API_SERVER}/user/changepassword`, {
            method: "POST",
            credentials: "include",
            headers,
        })
    }

}

export default new Api();
