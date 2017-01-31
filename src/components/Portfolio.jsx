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
  <Carousel id="portfolio" {...carouselConfig}>
    <PortfolioItem title="Calculator-Redux"
                   link="https://github.com/mattmatters/calculator-redux"
                   ghLink="https://github.com/mattmatters/calculator-redux"
                   img="calc"
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
                   ghLink="https://github.com/mattmatters/leaderboard-redux"
                   img="grandma"
                   description="React-Redux Experiment with asynchronous operations"
    />
    <PortfolioItem title="Lou Reed Tribute"
                   link="http://loureedtribute.com.s3-website-us-east-1.amazonaws.com/"
                   ghLink="https://github.com/mattmatters/louReedTributeSite"
                   img="grandma"
                   description="Experiment in creating a website utilizing only Bootstrap as a stylesheet"
    />
    <PortfolioItem title="Markdown Preview"
                   link="https://github.com/mattmatters/calculator-redux"
                   ghLink="https://github.com/mattmatters/markdownPreview"
                   img="grandma"
                   description="Auto-updating Markdown to HTML converter"
    />
  </Carousel>
);

export default Portfolio;
