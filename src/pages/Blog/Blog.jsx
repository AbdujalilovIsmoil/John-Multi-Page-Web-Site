import BlogPage from "../../components/section/Blog/BlogPage";
import React from "react";

const Blog = () => {
  const BlogPageApi = [
    {
      title: "UI Interactions of the week",
      text: "Express, Handlebars",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint. Velit officia consequat duis enim velit mollit.
      Exercitation veniam consequat sunt nostrud amet.`,
      date: new Date().getDate(),
      year: new Date().getFullYear(),
    },
    {
      title: "UI Interactions of the week",
      text: "Express, Handlebars",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint. Velit officia consequat duis enim velit mollit.
      Exercitation veniam consequat sunt nostrud amet.`,
      date: new Date().getDate(),
      year: new Date().getFullYear(),
    },
    {
      title: "UI Interactions of the week",
      text: "Express, Handlebars",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint. Velit officia consequat duis enim velit mollit.
      Exercitation veniam consequat sunt nostrud amet.`,
      date: new Date().getDate(),
      year: new Date().getFullYear(),
    },
    {
      title: "UI Interactions of the week",
      text: "Express, Handlebars",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint. Velit officia consequat duis enim velit mollit.
      Exercitation veniam consequat sunt nostrud amet.`,
      date: new Date().getDate(),
      year: new Date().getFullYear(),
    },
  ];

  return (
    <div>
      <BlogPage api={BlogPageApi} />
    </div>
  );
};

export default Blog;
