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
    <div className="container text-center bg-box">
      <p> {description} </p>
      <p className={ghLink ? 'gh-link' : 'hidden'} >
        <a href={ghLink} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true" />
        </a>
      </p>
    </div>
  </div>
);

PortfolioItem.propTypes = propTypes;

export default PortfolioItem;
