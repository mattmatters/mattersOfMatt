import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Skill = ({ title, img, description }) => (
  <div className="skill col-xs-12 col-sm-6 col-md-4 center-block">
    <h4 className="text-center"> {title} </h4>
    <img className="center-block" src={img} alt={`Whoops this is supposed to be ${title}`} />
    <p className="text-center"> {description} </p>
  </div>
);

Skill.propTypes = propTypes;

export default Skill;
