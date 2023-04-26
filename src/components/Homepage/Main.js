import React from "react";
import Herosection from "./Herosection";

const style = {
  backgroundColor: "yellow",
  display: "block",
};

function Main() {
  return (
    <main>
      <Herosection />
      <div>Specials</div>
      <div>Testimonials</div>
      <div>About</div>
    </main>
  );
}

export default Main;
