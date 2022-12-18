import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { total } = props;

  return (
    <>
      <div className={total ? "Navbar active" : "Navbar"}>
        <div className="container">
          <ul className="Navbar__list">
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
