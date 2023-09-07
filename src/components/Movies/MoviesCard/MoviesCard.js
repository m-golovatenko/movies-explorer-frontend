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
        <p className="movie__title-text">{title}</p>
        {location.pathname === '/movies' ? (
          <button
            className={!isLiked ? 'movie__like' : 'movie__like movie__like_active'}
            aria-label="Сохранить"
            onClick={handleClick}
          />
        ) : (
          <button className="movie__delete" aria-label="Удалить"></button>
        )}
      </div>
      <p className="movie__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
