import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <form className="search-content">
        <input className="search__bar" placeholder={'Фильм'} />
        <div className="searh__img"></div>
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

      <div className="search__short-films_mobile">
        <input type="checkbox" className="search__toggle-button" />
        <p className="search__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
