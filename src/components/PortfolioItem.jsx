import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
};

const PortfolioItem = ({ title, img, description, link, ghLink }) => (
  <div className={`port-item col-xs-10 col-md-4 ${img}`}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h2 className="text-center"> {title} </h2>
    </a>
    <p className="container text-center bg-box"> {description} </p>
    <div className="row">
      <div className={ghLink ? 'col-xs-6' : 'col-xs-12'}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="center-block"> Check it out </button>
        </a>
      </div>
      <div className={ghLink ? 'col-xs-6' : 'hidden'}>
        <a href={ghLink} target="_blank" rel="noopener noreferrer">
          <button className="center-block"> <i className="fa fa-github" aria-hidden="true" />
            Source Code
          </button>
        </a>
      </div>
    </div>
  </div>
);

PortfolioItem.propTypes = propTypes;

export default PortfolioItem;
