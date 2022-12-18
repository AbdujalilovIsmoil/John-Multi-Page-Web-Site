import React, { useState, useRef } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const header = () => {

  const [nav, setNav] = useState(false);
  const navRef = useRef();
  const Clicked = () => {
    setNav(nav => !nav);
    navRef.current.classList.toggle("active");
  }

  return (
    <>
      <Navbar local={nav} />
      <header className="header">
        <div className="container-x">
          <nav ref={navRef} className="nav">
            <ul className="nav__list">
              <li className="nav__list_item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__list_item-link active"
                      : "nav__list_item-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__list_item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__list_item-link active"
                      : "nav__list_item-link"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav__list_item">
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__list_item-link active"
                      : "nav__list_item-link"
                  }
                >
                  Works
                </NavLink>
              </li>
              <li className="nav__list_item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__list_item-link active"
                      : "nav__list_item-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <i onClick={() => Clicked()} className="fa fa-bars"></i>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default header;
