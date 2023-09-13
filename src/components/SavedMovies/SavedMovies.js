import React from 'react';
import { savedMovies } from '../../utils/consts';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({ isLoggedIn, setLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <main className="movies" aria-label="saved-movies">
        <SearchForm />
        <MoviesCardList movies={savedMovies} />
        <Pagination />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
