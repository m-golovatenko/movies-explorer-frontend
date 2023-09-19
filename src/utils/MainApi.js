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
      return Promise.reject(`Код ошибки: $(res.status)`);
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
  getSavedMovies(token) {
    return fetch(`${this._url}/movies`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` }
    }).then(this._checkStatus);
  }

  //Add Movie - POST
  createMovie(data, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail
      })
    }).then(this._checkStatus);
  }

  //Delete Movie - DELETE
  deleteSavedMovies(movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: { ...this._headers, Authorization: `Bearer ${token}` }
    }).then(this._checkStatus);
  }

  //Toggle LIke
  /*changeLikeCardStatus(movieId, isLiked, token) {
      return fetch(`${this._url}/movies/${movieId}/likes`, {
        method: `${!isLiked ? 'PUT' : 'DELETE'}`, 
        headers: 
        {...this._headers,
          Authorization: `Bearer ${token}`,
        }
      }).then(this._checkStatus);
    }*/
}

export const mainApi = new MainApi({
  url: MAIN_URL,

  headers: {
    'Content-Type': 'application/json'
  }
});
