import React from 'react';
import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ img, title, duration }) {
  const [isLiked, setIsLiked] = useState(null);
  const location = useLocation();

  function handleClick() {
    setIsLiked(true);
  }

  return (
    <li className="movie">
      <img src={img} alt={title} className="movie__img" />
      <div className="movie__title">
        <h2 className="movie__title-text">{title}</h2>
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
      <p className="movie__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
