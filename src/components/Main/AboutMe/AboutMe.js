import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me-title">Студент</h2>
      <div className="about-me-info">
        <div className="about-me-info-text">
          <h3 className="about-me-info-text-name">Мария</h3>
          <p className="about-me-info-text-job">Фронтенд-разработчик, 24 года </p>
          <p className="about-me-info-text-content">
            Я родилась и живу в Сыктывкаре, закончила факультет международных отношений СыктГУ. Я
            люблю изучать иностранные языки. Недавно начала кодить. С 2020 года работала в
            международном отделе СыктГУ. После того, как прошла курс по веб-разработке, ушла с
            постоянной работы, чтобы уделять больше времени учёбе и созданию проектов.
          </p>
          <a
            href="https://github.com/m-golovatenko"
            target="_blank"
            rel="noreferrer"
            className="about-me-info-text-link"
          >
            Github
          </a>
        </div>
        <img className="about-me-info-img" alt="Фотография студента." />
      </div>
    </div>
  );
}

export default AboutMe;
