import React from 'react';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';

function SavedMovies() {
  return (
    <main className="movies" aria-label="saved-movies">
      <SearchForm />
      <MoviesCardList />
      <Pagination />
    </main>
  );
}

export default SavedMovies;
