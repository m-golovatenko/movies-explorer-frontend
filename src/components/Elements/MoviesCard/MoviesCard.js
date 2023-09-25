import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { getTimeFromMins } from '../../../utils/utils';

function MoviesCard({ movie, deleteMovie, saveMovie, isSaved, deleteClick }) {
  const location = useLocation();

  function handleSave() {
    saveMovie(movie);
  }

  function handleDelete() {
    deleteMovie(movie);
  }

  function handleDeleteClick() {
    deleteClick(movie);
  }

  return (
    <li className="movie">
      <a href={movie.trailerLink} className="movie__trailer" target="_blank" rel="noreferrer">
        <img
          src={
            location.pathname === '/movies'
              ? `https://api.nomoreparties.co/${movie.image.url}`
              : movie.image
          }
          alt={movie.nameRU || movie.nameEn}
          className="movie__img"
        />
      </a>
      <div className="movie__title">
        <h2 className="movie__title-text">{movie.nameRU}</h2>
        {location.pathname === '/movies' ? (
          <button
            className={!isSaved ? 'movie__like' : 'movie__like movie__like_active'}
            aria-label="Сохранить"
            onClick={!isSaved ? handleSave : handleDelete}
            type="button"
          />
        ) : (
          <button
            className={
              location.pathname === '/movies'
                ? 'movie__delete'
                : 'movie__delete movie__delete_active'
            }
            aria-label="Удалить"
            type="button"
            onClick={handleDeleteClick}
          ></button>
        )}
      </div>
      <p className="movie__duration">{getTimeFromMins(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
