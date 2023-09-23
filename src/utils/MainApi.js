import { MAIN_URL } from './consts';
class MainApi {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  //Status Check
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  //Get User Info - GET
  getCurrentUser(token) {
    return fetch(`${this._url}/users/me`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` }
    }).then(this._checkStatus);
  }

  //Cange User Info - PATCH
  changeUserInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    }).then(this._checkStatus);
  }

  //Get Saved Movies - GET
  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    }).then(this._checkStatus);
  }

  //Add Movie - POST
  createMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      body: JSON.stringify({
        movieId: data.id,
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: 'https://api.nomoreparties.co/' + data.image.url,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: 'https://api.nomoreparties.co/' + data.image.formats.thumbnail.url
      })
    }).then(this._checkStatus);
  }

  //Delete Movie - DELETE
  deleteSavedMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    }).then(this._checkStatus);
  }
}

export const mainApi = new MainApi({
  url: MAIN_URL,

  headers: {
    'Content-Type': 'application/json'
  }
});
