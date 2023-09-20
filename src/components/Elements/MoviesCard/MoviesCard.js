import React from 'react';
import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
  const [isLiked, setIsLiked] = useState(null);
  const location = useLocation();

  function handleClick() {
    setIsLiked(true);
  }

  return (
    <li className="movie">
      <a href={movie.trailerLink} className="movie__trailer" target="_blank" rel="noreferrer">
        <img
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU || movie.nameEn}
          className="movie__img"
        />
      </a>
      <div className="movie__title">
        <h2 className="movie__title-text">{movie.nameRU}</h2>
        {location.pathname === '/movies' ? (
          <button
            className={!isLiked ? 'movie__like' : 'movie__like movie__like_active'}
            aria-label="Сохранить"
            onClick={handleClick}
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
          ></button>
        )}
      </div>
      <p className="movie__duration">{movie.duration}</p>
    </li>
  );
}

export default MoviesCard;
