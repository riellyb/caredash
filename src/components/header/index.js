import React from 'react';
import logo from '../../images/logo.svg';
import Link from "gatsby-link";

import './_header.scss';

const Header = () =>
  (<header className="header">
    <div className="container">
      <div className="row">
          <div className="col-12 col-md-4">
            <span className="header-logo">
              <Link to="/">
                <img className="header-image" src={logo} />
              </Link>
            </span>
          </div>
          <div className="col-12 col-md-8">
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <div className="dropdown">
                    <a href="" className=" dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Menu
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <ul>
                        <li><a href="">Item 1</a></li>
                        <li><a href="">Item 2</a></li>
                        <li><a href="">Item 3</a></li>
                        <li><a href="">Item 4</a></li>
                      </ul>

                    </div>
                  </div>
                </li>
                <li className="header-nav-list-item">
                  <Link to="/find">Find a Doctor</Link>
                </li>
                <li className="header-nav-list-item">
                  <Link to="/family">Family</Link>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </div>
  </header>);

export default Header;
