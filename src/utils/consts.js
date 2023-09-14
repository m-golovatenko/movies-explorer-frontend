import image1 from '../images/movies/movie-1.png';
import image2 from '../images/movies/movie-2.png';
import image3 from '../images/movies/movie-3.png';
import image4 from '../images/movies/movie-4.png';
import image5 from '../images/movies/movie-5.png';
import image6 from '../images/movies/movie-6.png';
import image7 from '../images/movies/movie-7.png';
import image8 from '../images/movies/movie-8.png';
import image9 from '../images/movies/movie-9.png';
import image10 from '../images/movies/movie-10.png';
import image11 from '../images/movies/movie-11.png';
import image12 from '../images/movies/movie-12.png';
import image13 from '../images/movies/movie-13.png';
import image14 from '../images/movies/movie-14.png';
import image15 from '../images/movies/movie-15.png';
import image16 from '../images/movies/movie-16.png';

const movies = [
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
  },
  {
    title: 'Баския: Взрыв реальности',
    duration: '1ч 42м',
    img: image4
  },
  {
    title: 'Бег это свобода',
    duration: '1ч 42м',
    img: image5
  },
  {
    title: 'Книготорговцы',
    duration: '1ч 42м',
    img: image6
  },
  {
    title: 'Когда я думаю о Германии ночью',
    duration: '1ч 42м',
    img: image7
  },
  {
    title: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 42м',
    img: image8
  },
  {
    title: 'Дженис: Маленькая девочка грустит',
    duration: '1ч 42м',
    img: image9
  },
  {
    title: 'Соберись перед прыжком',
    duration: '1ч 42м',
    img: image10
  },
  {
    title: 'Пи Джей Харви: A dog called money',
    duration: '1ч 42м',
    img: image11
  },
  {
    title: 'По волнам: Искусство звука в кино',
    duration: '1ч 42м',
    img: image12
  },
  {
    title: 'Рудбой',
    duration: '1ч 42м',
    img: image13
  },
  {
    title: 'Скейт — кухня',
    duration: '1ч 42м',
    img: image14
  },
  {
    title: 'Война искусств',
    duration: '1ч 42м',
    img: image15
  },
  {
    title: 'Зона',
    duration: '1ч 42м',
    img: image16
  }
];

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

export { movies, savedMovies, MOVIES_URL, MAIN_URL };
