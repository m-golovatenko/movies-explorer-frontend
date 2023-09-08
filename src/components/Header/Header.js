import React from 'react';
import { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import account from '../../images/header__acc.svg';

function Header({ isLoggedIn }) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(null);

  const location = useLocation();

  function handleBurgerMenuOpen() {
    setIsBurgerMenuOpen(true);
  }

  function handleClose() {
    setIsBurgerMenuOpen(false);
  }

  return (
    <header className={location.pathname === '/' ? 'header' : 'header header_dark'}>
      <div className="header__container">
        <div className="header__nav">
          <Link to="/" className="header__logo" aria-label="Логотип учебного прокта" />
          {isLoggedIn ? (
            <ul className="header__links">
              <li>
                <Link to="/movies" className="header__links-item">
                  Фильмы
                </Link>
              </li>
              <li>
                <Link to="/saved-movies" className="header__links-item">
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
          ) : (
            ' '
          )}
        </div>
        {isLoggedIn ? (
          <>
            <Link
              to="/profile"
              className={
                location.pathname === '/'
                  ? 'header__acc header__acc_blue'
                  : 'header__acc header__acc_dark'
              }
            >
              <p className="header__acc-text">Аккаунт</p>
              <img
                src={account}
                alt="Вход в личный кабинет."
                className={
                  location.pathname === '/'
                    ? 'header__acc-img header__acc-img_blue'
                    : 'header__acc-img header__acc-img_dark'
                }
              />
            </Link>
            <button className="header__burger" onClick={handleBurgerMenuOpen} />
          </>
        ) : (
          <ul className="header__auth">
            <li className="header__auth-reg">Регистрация</li>
            <li className="header__auth-login">Войти</li>
          </ul>
        )}
      </div>
      <BurgerMenu
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        handleClose={handleClose}
      />
    </header>
  );
}

export default Header;
