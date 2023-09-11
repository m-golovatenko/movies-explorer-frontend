import React from 'react';
import { useState } from 'react';
import './Movies.css';
import SearchForm from '../Elements/SearchForm/SearchForm';
import MoviesCardList from '../Elements/MoviesCardList/MoviesCardList';
import { movies } from '../../utils/consts';
import Pagination from '../Pagination/Pagination';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({ isLoggedIn, setLoggedIn }) {
  // eslint-disable-next-line
  const [nothingFound, setIsNothingFound] = useState(false);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <section className="movies">
        <SearchForm />
        {!nothingFound ? (
          <MoviesCardList movies={movies} />
        ) : (
          <p className="movies__nothing">По вашему запросу ничего не&nbsp;найдено😢</p>
        )}
        {!nothingFound ? <Pagination /> : ''}
      </section>
      <Footer />
    </>
  );
}

export default Movies;
