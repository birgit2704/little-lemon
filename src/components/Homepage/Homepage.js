import React from "react";
import "../../components/global.css";
import Herosection from "./Herosection";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import ButtonBackToTop from "../ButtonBackToTop";

const Homepage = () => {
  return (
    <main>
      <Herosection />
      <Specials />
      <Testimonials />
      <About />
      <ButtonBackToTop />
    </main>
  );
};

export default Homepage;
