import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { movies } from '../../utils/consts';
import Pagination from '../Pagination/Pagination';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <Pagination />
    </section>
  );
}

export default Movies;
