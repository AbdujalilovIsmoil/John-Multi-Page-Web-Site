import React, { useEffect } from "react";
import "./section2.scss";
import work1 from "../../../../images/section/work1.svg";
import work2 from "../../../../images/section/work2.svg";
import work3 from "../../../../images/section/work3.svg";
import Aos from "aos";
import "../../../../../node_modules/aos/dist/aos.css";

const section2 = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section__featured">
            <p
              className="section__featured-text"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Featured works
            </p>
            <div className="section__featured_container">
              <div className="section__featured_container_box">
                <img
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  src={work1}
                  alt="work1"
                  title="work1"
                  className="section__featured_container_box-img"
                />
                <div className="section__featured_container_box_content">
                  <h2
                    className="section__featured_container_box_content-title"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    Designing Dashboards
                  </h2>
                  <div className="section__featured_container_box_content_dates">
                    <p
                      className="section__featured_container_box_content_dates-year"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      2020
                    </p>
                    <p
                      className="section__featured_container_box_content_dates-text"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      Dashboard
                    </p>
                  </div>
                  <p
                    className="section__featured_container_box_content-description"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="section__featured_container_box second">
                <img
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  src={work2}
                  alt="work2"
                  title="work2"
                  className="section__featured_container_box-img"
                />
                <div className="section__featured_container_box_content">
                  <h2
                    className="section__featured_container_box_content-title"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    Vibrant Portraits of 2020
                  </h2>
                  <div className="section__featured_container_box_content_dates">
                    <p
                      className="section__featured_container_box_content_dates-year"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      2018
                    </p>
                    <p
                      className="section__featured_container_box_content_dates-text"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      Illustration
                    </p>
                  </div>
                  <p
                    className="section__featured_container_box_content-description"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="section__featured_container_box">
                <img
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  src={work3}
                  alt="work3"
                  title="work3"
                  className="section__featured_container_box-img"
                />
                <div className="section__featured_container_box_content">
                  <h2
                    className="section__featured_container_box_content-title"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    36 Days of Malayalam type
                  </h2>
                  <div className="section__featured_container_box_content_dates">
                    <p
                      className="section__featured_container_box_content_dates-year"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      2018
                    </p>
                    <p
                      className="section__featured_container_box_content_dates-text"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      Typography
                    </p>
                  </div>
                  <p
                    className="section__featured_container_box_content-description"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
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
