import { HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import Herosection from "./Herosection";

const style = {
  backgroundColor: "yellow",
  display: "block",
};

function Main() {
  return (
    <main>
      <VStack>
        <Herosection />
        <div>Specials</div>
        <div>Testimonials</div>
        <did>About</did>
      </VStack>
    </main>
  );
}

export default Main;
