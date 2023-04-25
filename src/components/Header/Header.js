import React from "react";
import Nav from "./Nav";
import logo from "../../assets/images/logo.jpg";
import { HStack } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <HStack justifyContent="space-between">
        <img src={logo} alt="little lemon logo" width="150px"></img>
        <Nav />
      </HStack>
    </header>
  );
}

export default Header;
