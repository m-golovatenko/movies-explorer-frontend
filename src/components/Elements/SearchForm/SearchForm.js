import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search" aria-label="search">
      <form className="search__content">
        <label className="search__content-img"></label>
        <input className="search__bar" placeholder={'Фильм'} required />
        <div className="search__buttons">
          <button className="search__submit" type="submit">
            Найти
          </button>
          <div className="search__short-films">
            <input type="checkbox" className="search__toggle-button" />
            <p className="search__text">Короткометражки</p>
          </div>
        </div>
      </form>

      <div className="search__short-films search__short-films_mobile">
        <input type="checkbox" className="search__toggle-button" />
        <p className="search__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
