/* eslint-disable */
import React from 'react';
import Carousel from 'nuka-carousel';
import PortfolioItem from '../components/PortfolioItem';
import grandma from '../../public/red-riding-hood.gif';

const carouselConfig = {
  autoplay: true,
  wrapAround: true,

};

const Portfolio = () => (
  <Carousel {...carouselConfig}>
    <PortfolioItem title="Calculator-Redux"
                   link="https://github.com/mattmatters/calculator-redux"
                   ghLink="https://github.com/mattmatters/calculator-redux"
                   img="grandma"
                   description="Chainable calculator build in React-Redux"
    />
    <PortfolioItem title="Barlen Electronics"
                   link="http://barlenelectronics.com"
                   ghLink="https://github.com/mattmatters/lennyWebsite"
                   img="grandma"
                   description="Website design and DNS management"
    />
    <PortfolioItem title="Leaderboard-Redux"
                   link="https://github.com/mattmatters/calculator-redux"
                   ghLink="https://github.com/mattmatters/calculator-redux"
                   img="grandma"
                   description="Chainable calculator build in React-Redux"
    />
    <PortfolioItem title="Calculator-Redux"
                   link="https://github.com/mattmatters/calculator-redux"
                   ghLink="https://github.com/mattmatters/calculator-redux"
                   img="grandma"
                   description="Chainable calculator build in React-Redux"
    />
    <PortfolioItem title="Calculator-Redux"
                   link="https://github.com/mattmatters/calculator-redux"
                   ghLink="https://github.com/mattmatters/calculator-redux"
                   img="grandma"
                   description="Chainable calculator build in React-Redux"
    />
  </Carousel>
);

export default Portfolio;
