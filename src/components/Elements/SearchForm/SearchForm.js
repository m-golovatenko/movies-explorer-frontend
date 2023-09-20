import { React, useEffect, useState } from 'react';
import './SearchForm.css';
import { useFormWithValidation } from '../../../hooks/useValidation';

function SearchForm() {
  const [shortMovies, setShortMovies] = useState();
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function handleFilterShortMovies() {}

  function handleSearch(e) {
    e.preventDefault();
  }
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <section className="search" aria-label="search">
      <form className="search__content" onSubmit={handleSearch}>
        <label className="search__content-img"></label>
        <input
          className="search__bar"
          placeholder={'Фильм'}
          name="search"
          type="text"
          autoComplete="off"
          value={values.search || ''}
          onChange={handleChange}
          required
        />
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
        <input
          type="checkbox"
          className="search__toggle-button"
          onChange={handleFilterShortMovies}
          checked={shortMovies ? true : false}
        />
        <p className="search__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
