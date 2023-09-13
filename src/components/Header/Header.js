import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../Elements/BurgerMenu/BurgerMenu';
import { useState } from 'react';

function Header({ isLoggedIn }) {
  const location = useLocation();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(null);
  function handleClose() {
    setIsBurgerMenuOpen(false);
  }

  return (
    <header className={location.pathname === '/' ? 'header' : 'header header_dark'}>
      <div className="header__container">
        <Link to="/" className="header__logo" aria-label="Логотип учебного прокта" />
        <Navigation isLoggedIn={isLoggedIn} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
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
