import React from 'react';
import './Techs.css';
import SectionHeading from '../SectionHeading/SectionHeading';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <SectionHeading titleText="Технологии" />
        <div className="techs__container-content">
          <h3 className="techs__container-content-title">7 технологий</h3>
          <p className="techs__container-content-text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <ul className="techs__container-list">
          <li className="techs__container-list-item techs__container-list-item_upper">Html</li>
          <li className="techs__container-list-item techs__container-list-item_upper">Css</li>
          <li className="techs__container-list-item techs__container-list-item_upper">Js</li>
          <li className="techs__container-list-item">React</li>
          <li className="techs__container-list-item">Git</li>
          <li className="techs__container-list-item">Express.js</li>
          <li className="techs__container-list-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
