import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, type }) {
  return (
    <ul className="movies-list">
      {movies.map(movie => (
        <MoviesCard
          id={movie.id}
          key={movie.id}
          img={movie.img}
          title={movie.title}
          type={type}
          duration={movie.duration}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
