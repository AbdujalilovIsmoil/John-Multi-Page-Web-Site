import "./BlogPage.scss";

const Blog = (props) => {
  const { api } = props;

  return (
    <>
      <section className="BlogPage">
        <div className="container">
          <h2 className="BlogPage-title">Blog</h2>
          <div className="BlogPage_container">
            {api.length > 0
              ? api.map((item, index) => (
                  <div className="BlogPage_container_box" key={index}>
                    <h3 className="BlogPage_container_box-title">
                      {item.title ? item.title : "Not Title"}
                    </h3>
                    <div className="BlogPage_container_box_dates">
                      <p className="BlogPage_container_box_dates-date">
                        {item.date ? item.date : new Date().getDate()} Feb{" "}
                        {item.year ? item.year : new Date().getFullYear()}
                      </p>
                      |
                      <p className="BlogPage_container_box_dates-text">
                        {item.text ? item.text : "Not Text"}
                      </p>
                    </div>
                    <p className="BlogPage_container_box-description">
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
