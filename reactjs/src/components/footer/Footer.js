import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
      <div>
      <footer className="footer is-primary">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>This is a simple design to test Vuejs</p>
            </div>
            <div className="column has-text-right">
              <a className="icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="icon">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      </div>
    );
  };


export default Footer;
