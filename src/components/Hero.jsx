import React from 'react';
import mattPic from '../../public/coolMatt.jpg';

const Hero = () => (
  <div id="hero" className="hero padding-top-bottom">
    <div className="hero-content container row center-block">
      <div className="col-xs-12 col-sm-3 col-md-4">
        <img src={mattPic} className="img-responsive img-circle center-block" alt="matt" />
      </div>
      <div className="col-xs-12 col-sm-9 col-md-8 bg-box">
        <p className="text-left">
          Full-Stack Web Engineer specializing in creative and out-of-the-box solutions.
        </p>
        <ul className="social-list">
          <li className="social-list__icon">
            <a href="https://github.com/mattmatters" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </li>
          <li className="social-list__icon social-list__icon--end">
            <a href="https://www.linkedin.com/in/doingmattstuff" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Hero;
