import React, { useEffect } from "react";
import "../../components/global.css";
import Herosection from "./Herosection";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import ButtonBackToTop from "../ButtonBackToTop";

const Homepage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
