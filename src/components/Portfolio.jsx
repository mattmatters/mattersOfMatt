/* eslint-disable */
import React from 'react';
import Carousel from 'nuka-carousel';
import PortfolioItem from '../components/PortfolioItem';
import grandma from '../../public/red-riding-hood.gif';

const Portfolio = () => (
  <div className="portfolio">
    <Carousel>
      <PortfolioItem title="Calculator-Redux"
                     link="https://github.com/mattmatters/calculator-redux"
                     ghLink="https://github.com/mattmatters/calculator-redux"
                     img={grandma}
                     description="Chainable calculator build in React-Redux"
      />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
    </Carousel>
  </div>
);

export default Portfolio;
