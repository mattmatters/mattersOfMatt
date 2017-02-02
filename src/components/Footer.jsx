import React from 'react';

const Footer = () => (
  <div id="footer">
    <p className="text-center">
      Designed and developed by <a href="http://themattersofmatt.com"> Matt Lewis </a>
    </p>
    <p className="text-center social-links">
      <a href="https://github.com/mattmatters" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github" aria-hidden="true" />
      </a>
      <a href="https://www.linkedin.com/in/doingmattstuff" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin" aria-hidden="true" />
      </a>
      <a href="mailto:domattthings@gmail.com">
        <i className="fa fa-envelope" aria-hidden="true" />
      </a>
    </p>
  </div>
);

export default Footer;
