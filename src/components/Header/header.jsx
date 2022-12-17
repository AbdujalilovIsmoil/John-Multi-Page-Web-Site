import React from "react";
import "./header.scss";

const header = () => {
  return (
    <>
      <header className="header">
        <div className="container-x">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list_item">
                <a href="#" className="nav__list_item-link active">
                  Home
                </a>
              </li>
              <li className="nav__list_item">
                <a href="#" className="nav__list_item-link">
                  Blog
                </a>
              </li>
              <li className="nav__list_item">
                <a href="#" className="nav__list_item-link">
                  Works
                </a>
              </li>
              <li className="nav__list_item">
                <a href="#" className="nav__list_item-link">
                  Contact
                </a>
              </li>
              <i className="fa fa-bars"></i>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default header;
