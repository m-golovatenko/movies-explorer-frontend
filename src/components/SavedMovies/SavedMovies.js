import React, { useContext, useEffect, useState } from 'react';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SHORT_MOVIE_DURATION } from '../../utils/consts';

function SavedMovies({ savedMovies, isLoggedIn, setSavedMovies }) {
  const currentUser = useContext(CurrentUserContext);
  const [isShort, setIsShort] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState(savedMovies);

  function filterShortMovies(movies) {
    return movies.filter(movie => movie.duration < SHORT_MOVIE_DURATION);
  }

  function handleShort() {
    setIsShort(!isShort);
    if (!isShort) {
      setMoviesToShow(filterShortMovies(moviesToShow));
    } else {
      setMoviesToShow(filter(savedMovies, searchQuery));
    }
  }

  function filter(movies, searchQuery, shortMoviesFound) {
    const moviesToShow = movies.filter(
      movie =>
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (moviesToShow.length === 0) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }

    if (shortMoviesFound) {
      return filterShortMovies(moviesToShow);
    } else {
      return moviesToShow;
    }
  }

  function handleSearch(searchQuery, shortMoviesFound) {
    const moviesToShow = filter(savedMovies, searchQuery, shortMoviesFound);
    setSearchQuery(searchQuery);
    setIsShort(isShort);
    setMoviesToShow(moviesToShow);
  }

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
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isShort={isShort}
        handleShort={handleShort}
        handleSearch={handleSearch}
      />
      {!isNothingFound ? (
        <>
          <MoviesCardList
            movies={moviesToShow}
            setSavedMovies={setSavedMovies}
            savedMovies={savedMovies}
          />
          <Pagination />
        </>
      ) : (
        <p className="movies__nothing">По вашему запросу ничего не&nbsp;найдено😢</p>
      )}
    </main>
  );
}

export default SavedMovies;
