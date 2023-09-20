import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import './Movies.css';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';
import useScreen from '../../hooks/useScreen';

function Movies({ initialMovies }) {
  const [nothingFound, setIsNothingFound] = useState(false);
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
      setMoviesNumber(prevRange => prevRange + 1);
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
      <SearchForm />
      {!nothingFound ? (
        <MoviesCardList movies={initialMovies} moviesNumber={moviesNumber} />
      ) : (
        <p className="movies__nothing">По вашему запросу ничего не&nbsp;найдено😢</p>
      )}
      {!nothingFound ? <Pagination loadMore={loadMore} /> : ''}
    </main>
  );
}

export default Movies;
