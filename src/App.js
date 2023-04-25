import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Homepage/Main";

function App() {
  return (
    <ChakraProvider>
      <Header />
      {/* <Main />
      <Footer /> */}
    </ChakraProvider>
  );
}

export default App;
