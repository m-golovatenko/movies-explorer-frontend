import React, { useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm({ searchQuery, setSearchQuery, handleSearch, isShort, handleShort }) {
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(null);

  function submitForm(e) {
    e.preventDefault();
    if (isValid) {
      handleSearch(searchQuery);
      setError('');
    } else {
      setError('Нужно ввести ключевое слово');
    }
  }

  useEffect(() => {
    if (searchQuery === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [setIsValid, searchQuery]);

  return (
    <section className="search" aria-label="search">
      <form className="search__content" onSubmit={submitForm} noValidate>
        <label className="search__content-img"></label>
        <input
          className="search__bar"
          placeholder={'Фильм'}
          name="search"
          type="text"
          autoComplete="off"
          value={searchQuery || ''}
          onChange={e => setSearchQuery(e.target.value)}
          required
        />
        <div className="search__buttons">
          <button className="search__submit" type="submit">
            Найти
          </button>
          <div className="search__short-films">
            <input
              type="checkbox"
              className="search__toggle-button"
              checked={isShort ? true : false}
              onChange={handleShort}
            />
            <p className="search__text">Короткометражки</p>
          </div>
        </div>
      </form>
      {!isValid ? <span className="search__error">{error}</span> : ''}

      <div className="search__short-films search__short-films_mobile">
        <input
          type="checkbox"
          className="search__toggle-button"
          checked={isShort ? true : false}
          onChange={handleShort}
        />
        <p className="search__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
