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
      <section className="movies">
        <SearchForm />
        <MoviesCardList movies={savedMovies} />
        <Pagination />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
