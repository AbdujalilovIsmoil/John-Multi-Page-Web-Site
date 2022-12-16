import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__icons">
            <i className="fab fa-facebook-square"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <p className="footer-text">
            Copyright ©{new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
