import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <div className="tech">
      <div className="tech-container">
        <h2 className="tech-container-title">Технологии</h2>
        <div className="tech-container-content">
          <h3 className="tech-container-content-title">7 технологий</h3>
          <p className="tech-container-content-text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <ul className="tech-container-list">
          <li className="tech-container-list-item">HTML</li>
          <li className="tech-container-list-item">CSS</li>
          <li className="tech-container-list-item">JS</li>
          <li className="tech-container-list-item">REACT</li>
          <li className="tech-container-list-item">Git</li>
          <li className="tech-container-list-item">Express.js</li>
          <li className="tech-container-list-item">mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;
