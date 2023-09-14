import { MAIN_URL } from './consts';
class AuthApi {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  //Status Check
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Код ошибки: $(res.status)`);
    }
  }

 register(password, email, name) {
    return fetch(`${MAIN_URL}/signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          password,
          email, 
          name
        })
      }).then(this._checkStatus);
 }

 login(password, email) {
    return fetch(`${MAIN_URL}/signin`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          password,
          email
        })
      }).then(this._checkStatus);
 }

 
 checkToken(token) {
    return fetch(`${MAIN_URL}/users/me`, {
        method: 'GET',
        headers: {...this._headers, Authorization: `Bearer ${token}`}
      }).then(this._checkStatus);
 }
}

export const authApi = new AuthApi({
  url: MAIN_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
