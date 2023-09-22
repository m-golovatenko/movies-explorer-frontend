import React, { useContext, useEffect } from 'react';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies({ savedMovies, isLoggedIn, setSavedMovies }) {
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then(savedMovies => {
          const userMovies = savedMovies.filter(movie => movie.owner === currentUser._id);
          localStorage.setItem('savedMovies', JSON.stringify(userMovies));
          setSavedMovies(userMovies);
        })
        .catch(e => console.error('Ошибка при получении сохраненных фильмов'));
    }
  }, [isLoggedIn, currentUser, setSavedMovies]);

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
