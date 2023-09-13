import React from 'react';
import './Navigation.css';
import account from '../../images/header__acc.svg';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ isLoggedIn, setIsBurgerMenuOpen }) {
  const location = useLocation();
  function handleBurgerMenuOpen() {
    setIsBurgerMenuOpen(true);
  }

  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <>
          <ul className="navigation__links">
            <li>
              <Link to="/movies" className="navigation__links-item">
                Фильмы
              </Link>
            </li>
            <li>
              <Link to="/saved-movies" className="navigation__links-item">
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <Link
            to="/profile"
            className={
              location.pathname === '/'
                ? 'navigation__acc navigation__acc_blue'
                : 'navigation__acc navigation__acc_dark'
            }
          >
            <p className="navigation__acc-text">Аккаунт</p>
            <img
              src={account}
              alt="Вход в личный кабинет."
              className={
                location.pathname === '/'
                  ? 'navigation__acc-img navigation__acc-img_blue'
                  : 'navigation__acc-img navigation__acc-img_dark'
              }
            />
          </Link>
          <button className="navigation__burger" onClick={handleBurgerMenuOpen} type="button" />
        </>
      ) : (
        <ul className="navigation__auth">
          <li>
            <Link to="/signup" className="navigation__auth-reg">
              Регистрация
            </Link>
          </li>
          <li>
            <Link to="/signin" className="navigation__auth-login">
              Войти
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
