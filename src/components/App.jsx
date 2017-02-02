import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const App = () => (
  <div className="App">
    <NavBar />
    <Hero />
    <Skills />
    <Portfolio />
    <Footer />
  </div>
);

export default App;
