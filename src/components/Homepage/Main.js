import React from "react";
import Herosection from "./Herosection";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function Main() {
  return (
    <main>
      <Herosection />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Main;
