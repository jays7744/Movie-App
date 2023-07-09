import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link className="header-link" to="/">
          <h1>Movies.com</h1>
          {/* <img
            className="header_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          /> */}
        </Link>
        <NavLink to="movies/popular" className="link">
          <span>Popular</span>
        </NavLink>
        <NavLink to="/movies/top_rated" className="link">
          <span>Top Rated</span>
        </NavLink>
        <NavLink to="/movies/upcoming" className="link">
          <span>Upcoming</span>
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
