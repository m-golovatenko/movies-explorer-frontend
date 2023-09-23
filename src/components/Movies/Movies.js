import React, { useState, useEffect, useCallback } from 'react';
import './Movies.css';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';
import useScreen from '../../hooks/useScreen';
import { moviesApi } from '../../utils/MoviesApi';
import { SHORT_MOVIE_DURATION } from '../../utils/consts';

function Movies({ setSavedMovies, savedMovies }) {
  const [initialMovies, setInitialMovies] = useState(
    JSON.parse(localStorage.getItem('allMovies')) || []
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [isShort, setIsShort] = useState(JSON.parse(localStorage.getItem('isShort')) || false);
  const [isNothingFound, setIsNothingFound] = useState(false);

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

  const [moviesNumber, setMoviesNumber] = useState(0);

  const { width } = useScreen();
  const column2 = 910;
  const column1 = 768;

  const loadMore = useCallback(() => {
    if (width > column2) {
      setMoviesNumber(prevRange => prevRange + 4);
    } else if (width > column1 && width < column2) {
      setMoviesNumber(prevRange => prevRange + 2);
    } else if (width < column1) {
      setMoviesNumber(prevRange => prevRange + 2);
    }
  }, [width]);

  useEffect(() => {
    if (width > column2) {
      setMoviesNumber(12);
    } else if (width > column1 && width < column2) {
      setMoviesNumber(8);
    } else if (width < column1) {
      setMoviesNumber(5);
    }
  }, [width]);

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
          movies={filtredMovies}
          moviesNumber={moviesNumber}
          setSavedMovies={setSavedMovies}
          savedMovies={savedMovies}
        />
      ) : (
        <p className="movies__nothing">По вашему запросу ничего не&nbsp;найдено😢</p>
      )}
      {!isNothingFound && filtredMovies.length > 0 ? <Pagination loadMore={loadMore} /> : ''}
    </main>
  );
}

export default Movies;
