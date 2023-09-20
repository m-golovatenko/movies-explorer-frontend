import React from 'react';
import { useState } from 'react';
import './Movies.css';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';

function Movies({ initialMovies }) {
  const [nothingFound, setIsNothingFound] = useState(false);

  return (
    <main className="movies" aria-label="movies">
      <SearchForm />
      {!nothingFound ? (
        <MoviesCardList movies={initialMovies} />
      ) : (
        <p className="movies__nothing">По вашему запросу ничего не&nbsp;найдено😢</p>
      )}
      {!nothingFound ? <Pagination /> : ''}
    </main>
  );
}

export default Movies;
