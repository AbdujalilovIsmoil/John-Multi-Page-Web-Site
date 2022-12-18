import React, { useEffect } from "react";
import "./main.scss";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";

const main = (props) => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__container">
            <div className="main__container_box" data-aos="fade-down" data-aos-duration="1000">
              <h2 className="main__container_box-title">
                Hi, I am John, Creative Technologist
              </h2>
              <p className="main__container_box-description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button type="button" className="main__container_box-btn">
                Download Resume
              </button>
            </div>
            <div className="main__container_box" data-aos="fade-down" data-aos-duration="1000">
              <img
                src={props.img}
                alt="john"
                title="john"
                className="main__container_box-img"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default main;
