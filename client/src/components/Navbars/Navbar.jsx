import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-4 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          {/* <img
            src="./Linkssets/img/brand.svg"
            className="navbar-brand-img"
            alt="..."
          /> */}
          <b>Decadrives</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link" id="navbarLandings" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" id="navbarPages" to="/drivers">
                Drivers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
