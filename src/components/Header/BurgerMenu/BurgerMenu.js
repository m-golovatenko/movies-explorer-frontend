import React from 'react';
import BurgerMenuLink from '../../Elements/BurgerMenuLink/BurgerMenuLink';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import account from '../../../images/header__acc.svg';

function BurgerMenu({ isBurgerMenuOpen, handleClose }) {
  return (
    <>
      {isBurgerMenuOpen ? (
        <div className="burger-menu">
          <div className="burger-menu__overlay"></div>
          <nav className="burger-menu__container">
            <button className="button-close" onClick={handleClose} />
            <ul className="burger-menu__links">
              <li>
                <BurgerMenuLink path={'/'} linkText="Главная" />
              </li>
              <li>
                <BurgerMenuLink path={'/movies'} linkText="Фильмы" />
              </li>
              <li>
                <BurgerMenuLink path={'/saved-movies'} linkText="Сохраненные фильмы" />
              </li>
            </ul>
            <Link to="/profile" className={'burger-menu__acc'}>
              <p className="burger-menu__acc-text">Аккаунт</p>
              <img src={account} alt="Вход в личный кабинет." className={'burger-menu__acc-img'} />
            </Link>
          </nav>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default BurgerMenu;
