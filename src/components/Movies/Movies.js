import React from 'react';
import { useState } from 'react';
import './Movies.css';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import { movies } from '../../utils/consts';
import Pagination from '../Pagination/Pagination';

function Movies() {
  // eslint-disable-next-line
  const [nothingFound, setIsNothingFound] = useState(false);
  return (
    <main className="movies" aria-label="movies">
      <SearchForm />
      {!nothingFound ? (
        <MoviesCardList movies={movies} />
      ) : (
        <p className="movies__nothing">По вашему запросу ничего не&nbsp;найдено😢</p>
      )}
      {!nothingFound ? <Pagination /> : ''}
    </main>
  );
}

export default Movies;
