import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, moviesNumber }) {
  return (
    <section aria-label="movie-list">
      <ul className="movies-list">
        {movies.slice(0, moviesNumber).map(movie => (
          <MoviesCard id={movie.id} key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
