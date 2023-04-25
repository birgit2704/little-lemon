import "./App.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Homepage/Main";

function App() {
  return (
    <ChakraProvider>
      <Container padding={2} maxW="container.lg">
        <Header />
        {/* <Main />
      <Footer /> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
