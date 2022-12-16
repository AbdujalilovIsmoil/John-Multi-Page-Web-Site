import React from "react";
import "./section.scss";

const section = () => {
  return (
    <>
      <section className="section">
        <div className="section__post">
          <div className="container">
            <div className="section__post_titles">
              <p className="section__post_titles-text">Recent posts</p>
              <a href="#" className="section__post_titles-link">
                View all
              </a>
            </div>
            <div className="section__post_container">
              <div className="section__post_container_box">
                <h2 className="section__post_container_box-title">
                  Making a design system from scratch
                </h2>
                <div className="section__post_container_box_dates">
                  <p className="section__post_container_box_dates-text">
                    {new Date().getDate()} Feb {new Date().getFullYear()}
                  </p>
                  |
                  <p className="section__post_container_box_dates-text">
                    Design, Pattern
                  </p>
                </div>
                <p className="section__post_container_box-description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="section__post_container_box">
                <h2 className="section__post_container_box-title">
                  Creating pixel perfect icons in Figma
                </h2>
                <div className="section__post_container_box_dates">
                  <p className="section__post_container_box_dates-text">
                    {new Date().getDate()} Feb {new Date().getFullYear()}
                  </p>
                  |
                  <p className="section__post_container_box_dates-text">
                    Design, Pattern
                  </p>
                </div>
                <p className="section__post_container_box-description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default section;
