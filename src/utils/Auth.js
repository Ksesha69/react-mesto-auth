export const url = 'https://auth.nomoreparties.co';

class Auth {
    constructor(setting) {
        this.url = setting.baseUrl;
        this.headers = setting.headers;
        console.dir(this.url)
    }

    _handleResponse = (res) => {
        if(res.ok) {
            return res.json();
        }
        return res.json().then((err) => {
            err.code = res.status;
            return Promise.reject(err);
        });
    }

    signUp ({email, password}) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(
                {email, password}
            )
        })
        .then(this._handleResponse)
        .catch((err) => console.log(err));
}

    signIn ({email, password}) {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                email, password
            })
        })
        .then(this._handleResponse)
        .catch((err) => console.log(err));
    }

    checkToken (token) {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => data)
}

}

const auth = new Auth({
    baseUrl: url,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})

export default auth;