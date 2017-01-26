import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
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
        <a className="navbar-brand" href="#slk">
          <b>Matt Matters</b>
        </a>
      </div>
      <div id="navbar-content" className="navbar-right collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li> Home </li>
          <li> Skills </li>
          <li> About Me </li>
          <li> Portfolio </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
