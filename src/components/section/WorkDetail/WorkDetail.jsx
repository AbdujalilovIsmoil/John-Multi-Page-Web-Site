import React, { useEffect } from "react";
import "./WorkDetail.scss";
import WorkDetailImg1 from "../../../images/section/WorkDetail-img1.svg";
import WorkDetailImg2 from "../../../images/section/WorkDetail-img2.svg";
import WorkDetailImg3 from "../../../images/section/WorkDetail-img3.svg";
import Aos from "aos";
import "../../../../node_modules/aos/dist/aos.css";

const WorkDetail = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="WorkDetail">
        <div className="container">
          <div className="WorkDetail__container">
            <div className="WorkDetail__container_box">
              <h2
                className="WorkDetail__container_box-title"
                data-aos="flip-down"
                data-aos-duration="1000"
              >
                Designing Dashboards with usability in mind
              </h2>
              <div className="WorkDetail__container_box_content">
                <p
                  className="WorkDetail__container_box_content-date"
                  data-aos="flip-down"
                  data-aos-duration="1000"
                >
                  2020
                </p>
                <p
                  className="WorkDetail__container_box_content-text"
                  data-aos="flip-down"
                  data-aos-duration="1000"
                >
                  Dashboard, User Experience Design
                </p>
              </div>
              <p
                className="WorkDetail__container_box-description"
                data-aos="flip-down"
                data-aos-duration="1000"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="WorkDetail__container_box">
              <img
                data-aos="flip-down"
                data-aos-duration="1000"
                className="WorkDetail__container_box-img"
                src={WorkDetailImg1}
                alt="WorkDetail-img1"
                title="WorkDetail-img1"
              />
            </div>
            <div className="WorkDetail__container_box">
              <h2
                className="WorkDetail__container_box-firstTitle"
                data-aos="flip-down"
                data-aos-duration="1000"
              >
                Heading 1
              </h2>
              <h3
                className="WorkDetail__container_box-secondTitle"
                data-aos="flip-down"
                data-aos-duration="1000"
              >
                Heading 2
              </h3>
              <p
                className="WorkDetail__container_box-description"
                data-aos="flip-down"
                data-aos-duration="1000"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="WorkDetail__container_box">
              <img
                data-aos="flip-down"
                data-aos-duration="1000"
                className="WorkDetail__container_box-img second"
                src={WorkDetailImg2}
                alt="WorkDetailImg2"
                title="WorkDetailImg2"
              />
            </div>
            <div className="WorkDetail__container_box">
              <img
                data-aos="flip-down"
                data-aos-duration="1000"
                className="WorkDetail__container_box-img"
                src={WorkDetailImg3}
                alt="WorkDetailImg3"
                title="WorkDetailImg3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
