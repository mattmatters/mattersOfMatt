import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
};

const PortfolioItem = ({ title, img, description, link, ghLink }) => (
  <div className="skill col-xs-10 col-md-4">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h4 className="text-center"> {title} </h4>
      <img className="center-block"src={img} alt={`Whoops this should be ${title}`} />
    </a>
    <div className="row center-block">
      <div className={ghLink ? 'col-xs-6' : 'col-xs-12'}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button> Check it out </button>
        </a>
      </div>
      <div className={ghLink ? 'col-xs-6' : 'hidden'}>
        <a href={ghLink} target="_blank" rel="noopener noreferrer">
          <button> <i className="fa fa-github" aria-hidden="true" /> Source Code </button>
        </a>
      </div>
    </div>
    <p> {description} </p>
  </div>
);

PortfolioItem.propTypes = propTypes;

export default PortfolioItem;
