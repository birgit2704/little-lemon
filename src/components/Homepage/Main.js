import React from "react";
import Herosection from "./Herosection";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Main() {
  return (
    <main>
      <Herosection />
      <Specials />
      <Testimonials />
      <div>About</div>
    </main>
  );
}

export default Main;
