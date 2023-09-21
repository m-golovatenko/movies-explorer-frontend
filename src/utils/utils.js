function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  if (hours === 0) {
    return `${minutes}м.`;
  } else {
    return `${hours}ч. ${minutes}м.`;
  }
}

function filterMovies(movies) {
  return movies.map(movie => {
    return {
      movieId: movie.id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
    };
  });
}

export { getTimeFromMins, filterMovies };
