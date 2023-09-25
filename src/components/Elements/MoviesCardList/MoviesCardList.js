import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { mainApi } from '../../../utils/MainApi';

function MoviesCardList({ movies, savedMovies, setSavedMovies, deleteClick }) {
  function getSavedMovie(movie) {
    return savedMovies.find(i => {
      return i.movieId === movie.id || i.movieId === movie.movieId;
    });
  }

  function saveMovie(movie) {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .createMovie(movie, jwt)
      .then(newSavedMovie => {
        setSavedMovies([newSavedMovie, ...savedMovies]);
      })
      .catch(e => console.error('Ошибка при сохранении фильма'));
  }

  function deleteMovie(movie) {
    const savedMovie = savedMovies.find(
      item => item.movieId === movie.id || item.movieId === movie.movieId
    );

    const jwt = localStorage.getItem('jwt');

    mainApi
      .deleteSavedMovie(savedMovie._id, jwt)
      .then(() => {
        const newArray = savedMovies.filter(deletedMovie => {
          if (movie.id === deletedMovie.movieId || movie.movieId === deletedMovie.movieId) {
            return false;
          } else {
            return true;
          }
        });
        localStorage.setItem('savedMovies', JSON.stringify(newArray));
        setSavedMovies(newArray);
      })
      .catch(e => console.error('Ошибка при удалении фильма'));
  }

  return (
    <section aria-label="movie-list">
      <ul className="movies-list">
        {movies.map(movie => (
          <MoviesCard
            key={movie.id || movie.movieId}
            movie={movie}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            isSaved={getSavedMovie(movie)}
            deleteClick={deleteClick}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
