import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "light" ? "light" : "dark"
        } bg-${props.mode === "light" ? "light" : "dark"} `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./About">
                  About Us
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            {/* Switches for dark modes */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkMode"
                onClick={props.toggleFuncDark}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="darkMode"
              >
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
// Default props
Header.defaultProps = {
  title: "set Title",
};
/* 
  Red dark mode 
  <div className="mx-2 form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="redMode"
    onClick={props.toggleFuncRed}
  />
  <label className={`form-check-label text-${props.mode==="light"?'dark':'light'}`} htmlFor="redMode">
    RedMode
  </label>
</div>
 Green dark mode 
<div className="mx-2 form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="greenMode"
    onClick={props.toggleFuncGreen}
  />
  <label className={`form-check-label text-${props.mode==="light"?'dark':'light'}`} htmlFor="greenMode">
    GreenMode
  </label>
</div>
 */
