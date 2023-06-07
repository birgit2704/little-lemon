import React, { createContext, useState } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

export const UserContext = createContext();

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <UserContext.Provider value={availableTimes}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

export default Main;
