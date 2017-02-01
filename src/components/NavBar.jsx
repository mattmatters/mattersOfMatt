import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button" className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-content"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#hero">
          Matt Matters
        </a>
      </div>
      <div id="navbar-content" className="navbar-right collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li> <a href="#skills"> Skills </a> </li>
          <li> <a href="#portfolio"> Portfolio </a> </li>
          <li> <a href="mailto:domattthings@gmail.com"> Contact </a> </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
