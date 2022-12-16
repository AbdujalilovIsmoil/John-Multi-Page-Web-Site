import React from "react";
import John from "../../images/main/main.svg";
import Main from "../../components/Main/main";
import Section from "../../components/section/Home/section1/section";
import Section2 from "../../components/section/Home/section2/section2";

const Home = () => {
  return (
    <section>
      <Main img={John} />
      <Section />
      <Section2 />
    </section>
  );
};

export default Home;
