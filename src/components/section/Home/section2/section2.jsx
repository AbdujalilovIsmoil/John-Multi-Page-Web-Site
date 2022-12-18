import React from "react";
import "./section2.scss";
import work1 from "../../../../images/section/work1.svg";
import work2 from "../../../../images/section/work2.svg";
import work3 from "../../../../images/section/work3.svg";
const section2 = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section__featured">
            <p className="section__featured-text">Featured works</p>
            <div className="section__featured_container">
            <div className="section__featured_container_box">
              <img
                src={work1}
                alt="work1"
                title="work1"
                className="section__featured_container_box-img"
              />
              <div className="section__featured_container_box_content">
                <h2 className="section__featured_container_box_content-title">
                  Designing Dashboards
                </h2>
                <div className="section__featured_container_box_content_dates">
                  <p className="section__featured_container_box_content_dates-year">
                    2020
                  </p>
                  <p className="section__featured_container_box_content_dates-text">
                    Dashboard
                  </p>
                </div>
                <p className="section__featured_container_box_content-description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="section__featured_container_box second">
              <img
                src={work2}
                alt="work2"
                title="work2"
                className="section__featured_container_box-img"
              />
              <div className="section__featured_container_box_content">
                <h2 className="section__featured_container_box_content-title">
                  Vibrant Portraits of 2020
                </h2>
                <div className="section__featured_container_box_content_dates">
                  <p className="section__featured_container_box_content_dates-year">
                    2018
                  </p>
                  <p className="section__featured_container_box_content_dates-text">
                    Illustration
                  </p>
                </div>
                <p className="section__featured_container_box_content-description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="section__featured_container_box">
              <img
                src={work3}
                alt="work3"
                title="work3"
                className="section__featured_container_box-img"
              />
              <div className="section__featured_container_box_content">
                <h2 className="section__featured_container_box_content-title">
                  36 Days of Malayalam type
                </h2>
                <div className="section__featured_container_box_content_dates">
                  <p className="section__featured_container_box_content_dates-year">
                    2018
                  </p>
                  <p className="section__featured_container_box_content_dates-text">
                    Typography
                  </p>
                </div>
                <p className="section__featured_container_box_content-description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default section2;
