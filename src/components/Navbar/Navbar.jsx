import React, { useRef } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { local } = props;
  const barsRef = useRef();
  const Clicked = () => {
    barsRef.current.classList.add("actives");
  };

  const LinkClicked = (e) => {
    if (e.target.classList.contains("Navbar__list_item-link")) {
      barsRef.current.classList.add("actives");
    }
  };

  return (
    <>
      <div ref={barsRef} className={local ? "Navbar active" : "Navbar"}>
        <i onClick={() => Clicked()} className="fa fa-times"></i>
        <div className="container">
          <ul onClick={(e) => LinkClicked(e)} className="Navbar__list">
            <li className="Navbar__list_item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "Navbar__list_item-link active"
                    : "Navbar__list_item-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="Navbar__list_item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "Navbar__list_item-link active"
                    : "Navbar__list_item-link"
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="Navbar__list_item">
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive
                    ? "Navbar__list_item-link active"
                    : "Navbar__list_item-link"
                }
              >
                Works
              </NavLink>
            </li>
            <li className="Navbar__list_item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "Navbar__list_item-link active"
                    : "Navbar__list_item-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
