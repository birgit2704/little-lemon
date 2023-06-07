import React from "react";
import "../Homepage/homepage.css";
import Herosection from "./Herosection";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

const Homepage = () => {
  return (
    <main>
      <Herosection />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};

export default Homepage;
