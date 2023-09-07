import React from 'react';
import { savedMovies } from '../../utils/consts';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';

function SavedMovies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
      <Pagination />
    </section>
  );
}

export default SavedMovies;
