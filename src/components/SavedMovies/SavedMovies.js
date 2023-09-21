import React, { useEffect } from 'react';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';
import { mainApi } from '../../utils/MainApi';

function SavedMovies({ savedMovies, isLoggedIn, setSavedMovies }) {
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getSavedMovies()
        .then(savedMovies => {
          setSavedMovies(savedMovies);
        })
        .catch(e => console.error('Ошибка при получении сохраненных фильмов'));
    }
  }, [isLoggedIn, setSavedMovies]);

  return (
    <main className="movies" aria-label="saved-movies">
      <SearchForm />
      <MoviesCardList
        movies={savedMovies}
        setSavedMovies={setSavedMovies}
        savedMovies={savedMovies}
      />
      <Pagination />
    </main>
  );
}

export default SavedMovies;
