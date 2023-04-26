import React from "react";
import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Container,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo.jpg";

const Herosection = () => {
  return (
    <HStack width="100%" justifyContent="space-between">
      <VStack width="40%" alignItems="flex-start">
        <Heading textAlign="left">Little Lemon</Heading>
        <p>Chicago</p>
        <p>
          lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
        <Button>Reserve a table</Button>
      </VStack>
      <Container width="40%">
        <Image src={logo} width="200px" />
      </Container>
    </HStack>
  );
};

export default Herosection;
