import React, { useEffect } from "react";
import "./BlogPage.scss";
import Aos from "aos";
import "../../../../node_modules/aos/dist/aos.css";

const Blog = (props) => {
  const { api } = props;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section className="BlogPage">
        <div className="container">
          <h2
            className="BlogPage-title"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Blog
          </h2>
          <div className="BlogPage_container">
            {api.length > 0
              ? api.map((item, index) => (
                <div className="BlogPage_container_box" key={index}>
                  <h3
                    className="BlogPage_container_box-title"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    {item.title ? item.title : "Not Title"}
                  </h3>
                  <div
                    className="BlogPage_container_box_dates"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <p
                      className="BlogPage_container_box_dates-date"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      {item.date ? item.date : new Date().getDate()} Feb{" "}
                      {item.year ? item.year : new Date().getFullYear()}
                    </p>
                    |
                    <p
                      className="BlogPage_container_box_dates-text"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      {item.text ? item.text : "Not Text"}
                    </p>
                  </div>
                  <p
                    className="BlogPage_container_box-description"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    {item.description ? item.description : "Not Description"}
                  </p>
                </div>
              ))
              : "NOT FOUND"}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
