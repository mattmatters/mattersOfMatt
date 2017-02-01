/* eslint-disable */
import React from 'react';
import Carousel from 'nuka-carousel';
import PortfolioItem from '../components/PortfolioItem';
import grandma from '../../public/red-riding-hood.gif';

const carouselConfig = {
  autoplay: true,
  wrapAround: true,
  decorators: [],
};

const Portfolio = () => (
  <div id="portfolio">
    <Carousel {...carouselConfig}>
      <PortfolioItem title="Calculator-Redux"
                     link="https://github.com/mattmatters/calculator-redux"
                     ghLink="https://github.com/mattmatters/calculator-redux"
                     img="calc"
                     description="Chainable calculator build in React-Redux"
      />
      <PortfolioItem title="Barlen Electronics"
                     link="http://barlenelectronics.com"
                     ghLink="https://github.com/mattmatters/lennyWebsite"
                     img="barlen"
                     description="Website design and DNS management"
      />
      <PortfolioItem title="Leaderboard-Redux"
                     link="https://github.com/mattmatters/calculator-redux"
                     ghLink="https://github.com/mattmatters/leaderboard-redux"
                     img="leaderboard"
                     description="React-Redux Experiment with asynchronous operations"
      />
      <PortfolioItem title="Lou Reed Tribute"
                     link="http://loureedtribute.com.s3-website-us-east-1.amazonaws.com/"
                     ghLink="https://github.com/mattmatters/louReedTributeSite"
                     img="lou-reed"
                     description="Experiment in creating a website utilizing only Bootstrap as a stylesheet"
      />
      <PortfolioItem title="Markdown Preview"
                     link="https://github.com/mattmatters/calculator-redux"
                     ghLink="https://github.com/mattmatters/markdownPreview"
                     img="markdown"
                     description="Auto-updating Markdown to HTML converter"
      />
      <PortfolioItem title="Random Quote"
                     link="http://codepen.io/dancingpolkabear/full/WRXoZW"
                     ghLink="http://codepen.io/dancingpolkabear/pen/WRXoZW"
                     img="random-quote"
                     description="Fetches and serves random quotes"
      />

    </Carousel>
  </div>
);

export default Portfolio;
