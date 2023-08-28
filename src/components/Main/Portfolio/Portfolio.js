import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href="https://github.com/m-golovatenko/how-to-learn"
            target="_blank"
            className="portfolio__list-item-link"
            rel="noreferrer"
          >
            <h3 className="portfolio__list-item-link-title">Статичный сайт</h3>
            <div className="portfolio__list-item-link-icon"></div>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://m-golovatenko.github.io/second-project-travel/"
            target="_blank"
            className="portfolio__list-item-link"
            rel="noreferrer"
          >
            <h3 className="portfolio__list-item-link-title">Адаптивный сайт</h3>
            <div className="portfolio__list-item-link-icon"></div>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://m-golovatenko.nomoreparties.co/"
            target="_blank"
            className="portfolio__list-item-link"
            rel="noreferrer"
          >
            <h3 className="portfolio__list-item-link-title">Одностраничное приложение</h3>
            <div className="portfolio__list-item-link-icon"></div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
