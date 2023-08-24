import React from 'react';
import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import './Header.css';
import account from '../../images/header__acc.svg';

function Header() {
  // eslint-disable-next-line
  const [isLoggedIn, setLoggedIn] = useState(false);
  // eslint-disable-next-line
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <header className={!darkTheme ? 'header' : 'header header_dark'}>
      <div className="header__container">
        <div className="header__nav">
          <Link to="/" className="header__logo" aria-label="Логотип учебного прокта" />
          {isLoggedIn ? (
            <ul className="header__links">
              <li to="" className="header__links-item">
                Фильмы
              </li>
              <li className="header__links-item">Сохраненные фильмы</li>
            </ul>
          ) : (
            ' '
          )}
        </div>
        {isLoggedIn ? (
          <Link
            to="/"
            className={!darkTheme ? 'header__acc header__acc_blue' : 'header__acc header__acc_dark'}
          >
            <p className="header__acc-text">Аккаунт</p>
            <img
              src={account}
              alt="Вход в личный кабинет."
              className={
                !darkTheme
                  ? 'header__acc-img header__acc-img_blue'
                  : 'header__acc-img header__acc-img_dark'
              }
            />
          </Link>
        ) : (
          <ul className="header__auth">
            <li className="header__auth-reg">Регистрация</li>
            <li className="header__auth-login">Войти</li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
