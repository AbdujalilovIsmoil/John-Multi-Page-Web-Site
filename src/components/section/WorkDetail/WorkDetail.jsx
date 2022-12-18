import React from "react";
import "./WorkDetail.scss";
import WorkDetailImg1 from "../../../images/section/WorkDetail-img1.svg";
import WorkDetailImg2 from "../../../images/section/WorkDetail-img2.svg";
import WorkDetailImg3 from "../../../images/section/WorkDetail-img3.svg";

const WorkDetail = () => {
  return (
    <>
      <div className="WorkDetail">
        <div className="container">
          <div className="WorkDetail__container">
            <div className="WorkDetail__container_box">
              <h2 className="WorkDetail__container_box-title">
                Designing Dashboards with usability in mind
              </h2>
              <div className="WorkDetail__container_box_content">
                <p className="WorkDetail__container_box_content-date">2020</p>
                <p className="WorkDetail__container_box_content-text">
                  Dashboard, User Experience Design
                </p>
              </div>
              <p className="WorkDetail__container_box-description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="WorkDetail__container_box">
              <img
                className="WorkDetail__container_box-img"
                src={WorkDetailImg1}
                alt="WorkDetail-img1"
                title="WorkDetail-img1"
              />
            </div>
            <div className="WorkDetail__container_box">
              <h2 className="WorkDetail__container_box-firstTitle">
                Heading 1
              </h2>
              <h3 className="WorkDetail__container_box-secondTitle">
                Heading 2
              </h3>
              <p className="WorkDetail__container_box-description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="WorkDetail__container_box">
              <img
                className="WorkDetail__container_box-img second"
                src={WorkDetailImg2}
                alt="WorkDetailImg2"
                title="WorkDetailImg2"
              />
            </div>
            <div className="WorkDetail__container_box">
              <img
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
