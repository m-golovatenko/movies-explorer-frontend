import React, { useState, useEffect, useCallback } from 'react';
import './Movies.css';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';
import useScreen from '../../hooks/useScreen';
import { moviesApi } from '../../utils/MoviesApi';
import { SHORT_MOVIE_DURATION } from '../../utils/consts';
import { MOVIES_NUMBER } from '../../utils/consts';

function Movies({ setSavedMovies, savedMovies }) {
  const [initialMovies, setInitialMovies] = useState(
    JSON.parse(localStorage.getItem('allMovies')) || []
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [isShort, setIsShort] = useState(JSON.parse(localStorage.getItem('isShort')) || false);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const { initial, desktop, tablet, mobile } = MOVIES_NUMBER;
  const [moviesNumber, setMoviesNumber] = useState();
  const { width } = useScreen();
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(null);

  function filter(movies, searchQuery, shortMoviesFound) {
    const filtredMovies = movies.filter(
      movie =>
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtredMovies.length === 0) {
      localStorage.setItem('filtredMovies', JSON.stringify([]));
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }

    if (shortMoviesFound) {
      return filterShortMovies(filtredMovies);
    } else {
      return filtredMovies;
    }
  }

  function filterShortMovies(movies) {
    return movies.filter(movie => movie.duration < SHORT_MOVIE_DURATION);
  }

  function render(movies, searchQuery, isShort) {
    const filtredMovies = filter(movies, searchQuery, isShort);
    if (filtredMovies.length !== 0) {
      localStorage.setItem('filtredMovies', JSON.stringify(filtredMovies));
      localStorage.setItem('isShort', isShort);
    }
    if (filtredMovies.length === 0) {
      localStorage.setItem('filtredMovies', JSON.stringify([]));
      setIsNothingFound(true);
    }
    setIsShort(isShort);
    setFiltredMovies(isShort ? filterShortMovies(filtredMovies) : filtredMovies);
  }

  function handleShort() {
    setIsShort(!isShort);
    if (!isShort) {
      setFiltredMovies(filterShortMovies(filtredMovies));
    } else {
      setFiltredMovies(JSON.parse(localStorage.getItem('filtredMovies')));
    }
    localStorage.setItem('isShort', !isShort);
  }

  function handleSearch() {
    localStorage.setItem('query', searchQuery);
    localStorage.setItem('isShort', isShort);

    setSearchQuery(searchQuery);
    if (initialMovies.length === 0) {
      moviesApi
        .getAllMovies()
        .then(movies => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
          setInitialMovies(movies);
          render(movies, searchQuery, isShort);
        })
        .catch(e => console.error('Ошибка при получении фильмов'));
    } else {
      render(initialMovies, searchQuery, isShort);
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem('filtredMovies') ||
      localStorage.getItem('query') ||
      localStorage.getItem('isShort')
    ) {
      const isShort = JSON.parse(localStorage.getItem('isShort'));
      setIsShort(isShort);
      const movies = JSON.parse(localStorage.getItem('filtredMovies'));
      setFiltredMovies(isShort ? filterShortMovies(movies) : movies);
      const searchQuery = localStorage.getItem('query');
      setSearchQuery(searchQuery);
    }
  }, []);

  const loadMore = useCallback(() => {
    if (width > desktop.width) {
      setMoviesNumber(prevRange => prevRange + initial.more);
    } else if (width < desktop.width && width > tablet.width) {
      setMoviesNumber(prevRange => prevRange + desktop.more);
    } else if (width < tablet.width && width > mobile.width) {
      setMoviesNumber(prevRange => prevRange + tablet.more);
    } else if (width < mobile.width) {
      setMoviesNumber(prevRange => prevRange + mobile.more);
    }
  }, [width, initial, desktop, tablet, mobile]);

  useEffect(() => {
    if (width > desktop.width) {
      setMoviesNumber(initial.movies);
    } else if (width < desktop.width && width > tablet.width) {
      setMoviesNumber(desktop.movies);
    } else if (width < tablet.width && width > mobile.width) {
      setMoviesNumber(tablet.movies);
    } else if (width < mobile.width) {
      setMoviesNumber(mobile.movies);
    }
  }, [width, initial, desktop, tablet, mobile]);

  useEffect(() => {
    setMoviesToShow(filtredMovies.slice(0, moviesNumber));
    if (moviesNumber >= filtredMovies.length) {
      return setIsButtonVisible(false);
    } else {
      setIsButtonVisible(true);
    }
  }, [filtredMovies, moviesNumber]);

  return (
    <main className="movies" aria-label="movies">
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        isShort={isShort}
        handleShort={handleShort}
      />
      {!isNothingFound ? (
        <MoviesCardList
          movies={moviesToShow}
          setSavedMovies={setSavedMovies}
          savedMovies={savedMovies}
        />
      ) : (
        <p className="movies__nothing">По вашему запросу ничего не&nbsp;найдено😢</p>
      )}
      {!isNothingFound ? <Pagination loadMore={loadMore} isButtonVisible={isButtonVisible} /> : ''}
    </main>
  );
}

export default Movies;
