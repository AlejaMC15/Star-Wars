import React, { Component } from 'react';
import StarWars from './images/Star-Wars.jpg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <img className="img-fluid" src={StarWars} alt="StarWars" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
