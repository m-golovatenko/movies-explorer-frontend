import image1 from '../images/movies/movie-1.png';
import image2 from '../images/movies/movie-2.png';
import image3 from '../images/movies/movie-3.png';

const savedMovies = [
  {
    title: '33 слова о дизайне',
    duration: '1ч 42м',
    img: image1
  },
  {
    title: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 42м',
    img: image2
  },
  {
    title: 'В погоне за Бенкси',
    duration: '1ч 42м',
    img: image3
  }
];

const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MAIN_URL = 'http://localhost:3001';

export { savedMovies, MOVIES_URL, MAIN_URL };
