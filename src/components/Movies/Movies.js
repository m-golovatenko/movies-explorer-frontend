import React from 'react';
import './Movies.css';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import { movies } from '../../utils/consts';
import Pagination from '../Pagination/Pagination';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({ isLoggedIn, setLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <section className="movies">
        <SearchForm />
        <MoviesCardList movies={movies} />
        <Pagination />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
