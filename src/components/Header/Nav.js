import React from "react";
import { Stack } from "@chakra-ui/react";

function Nav() {
  return (
    <nav>
      <Stack direction={["column", "row"]} listStyleType="none" padding="40px">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </Stack>
    </nav>
  );
}

export default Nav;
