import React from 'react';
import './AboutProject.css';
import SectionHeading from '../SectionHeading/SectionHeading';

function AboutProject() {
  return (
    <section className="about-project">
      <SectionHeading titleText="О проекте" />
      <ul className="about-project__list">
        <li className="about-project__list-item">
          <h3 className="about-project__list-item-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__list-item-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </li>
        <li className="about-project__list-item">
          <h3 className="about-project__list-item-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__list-item-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__schedule">
        <li className="about-project__schedule-item">
          <p className="about-project__schedule-item-title about-project__schedule-item-title_short">
            1 неделя
          </p>
          <p className="about-project__schedule-item-subtitle">Back-end</p>
        </li>
        <li className="about-project__schedule-item">
          <p className="about-project__schedule-item-title about-project__schedule-item-title_long">
            4 недели
          </p>
          <p className="about-project__schedule-item-subtitle">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
