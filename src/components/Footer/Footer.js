import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  return (
    <footer className={location.pathname !== '/profile' ? 'footer' : 'footer footer_hidden'}>
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__content">
        <p className="footer__content-copyright">&copy; 2023</p>
        <ul className="footer__content-links">
          <li className="footer__content-links-item">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              className="footer__content-links-item"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>

          <li className="footer__content-links-item">
            <a
              href="https://github.com/m-golovatenko"
              target="_blank"
              className="footer__content-links-item"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
