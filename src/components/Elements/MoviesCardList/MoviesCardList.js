import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, type }) {
  return (
    <section aria-label="movie-list">
      <ul className="movies-list">
        {movies.map(movie => (
          <MoviesCard id={movie.id} key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
