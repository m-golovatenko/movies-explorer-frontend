import { MOVIES_URL } from './consts';
class MoviesApi {
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

  getAllMovies() {
    return fetch(`${this._url}`, {
      headers: this._headers
    }).then(this._checkStatus);
  }
}

export const moviesApi = new MoviesApi({
  url: MOVIES_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
