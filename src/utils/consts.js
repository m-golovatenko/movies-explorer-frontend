const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MAIN_URL = 'https://api.explore-movies.nomoredomainsicu.ru';

const SHORT_MOVIE_DURATION = 40;

const MOVIES_NUMBER = {
  initial: {
    movies: 12,
    more: 4
  },
  desktop: {
    width: 1180,
    movies: 9,
    more: 3
  },
  tablet: {
    width: 880,
    movies: 8,
    more: 2
  },
  mobile: {
    width: 540,
    movies: 5,
    more: 2
  }
};

export { MOVIES_URL, MAIN_URL, SHORT_MOVIE_DURATION, MOVIES_NUMBER };
