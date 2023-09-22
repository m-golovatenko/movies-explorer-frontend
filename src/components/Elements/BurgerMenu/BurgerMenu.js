import React from 'react';
import BurgerMenuLink from '../BurgerMenuLink/BurgerMenuLink';
import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css';
import account from '../../../images/header__acc.svg';

function BurgerMenu({ isBurgerMenuOpen, handleClose }) {
  const location = useLocation();

  function isActive(path) {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className={!isBurgerMenuOpen ? 'burger-menu' : ' burger-menu burger-menu_active'}>
      <div className="burger-menu__overlay">
        <nav className="burger-menu__container ">
          <button className="burger-menu__button-close" onClick={handleClose} type="button" />
          <ul className="burger-menu__links">
            <li>
              <BurgerMenuLink
                path={'/'}
                linkText="Главная"
                handleClick={handleClose}
                isActive={isActive('/')}
              />
            </li>
            <li>
              <BurgerMenuLink
                path={'/movies'}
                linkText="Фильмы"
                handleClick={handleClose}
                isActive={isActive('/movies')}
              />
            </li>
            <li>
              <BurgerMenuLink
                path={'/saved-movies'}
                linkText="Сохраненные фильмы"
                handleClick={handleClose}
                isActive={isActive('/saved-movies')}
              />
            </li>
          </ul>
          <Link to="/profile" className={'burger-menu__acc'} onClick={handleClose}>
            <p className="burger-menu__acc-text">Аккаунт</p>
            <img src={account} alt="Вход в личный кабинет." className={'burger-menu__acc-img'} />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
