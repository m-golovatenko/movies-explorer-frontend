import React from 'react';
import { savedMovies } from '../../utils/consts';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';

function SavedMovies({ isLoggedIn, setLoggedIn }) {
  return (
    <main className="movies" aria-label="saved-movies">
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
      <Pagination />
    </main>
  );
}

export default SavedMovies;
