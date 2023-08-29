import React from 'react';
import './Techs.css';
import SectionHeading from '../SectionHeading/SectionHeading';

function Techs() {
  return (
    <div className="techs">
      <div className="techs-container">
        <SectionHeading titleText="Технологии" />
        <div className="techs-container-content">
          <h3 className="techs-container-content-title">7 технологий</h3>
          <p className="techs-container-content-text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <ul className="techs-container-list">
          <li className="techs-container-list-item">HTML</li>
          <li className="techs-container-list-item">CSS</li>
          <li className="techs-container-list-item">JS</li>
          <li className="techs-container-list-item">REACT</li>
          <li className="techs-container-list-item">Git</li>
          <li className="techs-container-list-item">Express.js</li>
          <li className="techs-container-list-item">mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;
