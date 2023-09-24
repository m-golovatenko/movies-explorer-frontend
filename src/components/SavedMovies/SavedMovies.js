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

  function filterShortMovies(movies) {
    return movies.filter(movie => movie.duration < SHORT_MOVIE_DURATION);
  }

  function handleShort() {
    const filteredMovies = filter(savedMovies, searchQuery, isShort);
    setIsShort(!isShort);
    if (!isShort) {
      setSavedMovies(filterShortMovies(filteredMovies));
    } else {
      setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
    }
  }

  function filter(savedMovies, searchQuery, shortMoviesFound) {
    const filtredMovies = savedMovies.filter(
      movie =>
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtredMovies.length === 0) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }

    if (shortMoviesFound) {
      return filterShortMovies(filtredMovies);
    } else {
      return filtredMovies;
    }
  }

  function handleSearch() {
    const filtredMovies = filter(savedMovies, searchQuery, isShort);
    if (filtredMovies.length !== 0) {
      setSearchQuery(searchQuery);
      setIsShort(isShort);
      setSavedMovies(isShort ? filterShortMovies(filtredMovies) : filtredMovies);
    } else {
      setIsNothingFound(true);
    }
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
            movies={savedMovies}
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
