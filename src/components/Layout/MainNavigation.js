import "./MainNavigation.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Fragment } from "react";
import Home from "../pages/Home";
const MainNavigation = () => {
  return (
    <Fragment>
      <header>
        <h1 className="logo">Rashmi</h1>
        <nav className="navigation">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </nav>
      </header>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="pink" />
            <use href="#gentle-wave" x="48" y="3" fill="pink" />
            <use href="#gentle-wave" x="48" y="5" fill="pink" />
            <use href="#gentle-wave" x="48" y="7" fill="pink" />
          </g>
        </svg>
      </div>
    </Fragment>
  );
};
export default MainNavigation;
