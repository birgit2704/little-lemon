import React, { createContext, useState } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

export const TimeContext = createContext();

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
    <TimeContext.Provider value={availableTimes}>
      <Header />
      <Outlet />
      <Footer />
    </TimeContext.Provider>
  );
};

export default Main;
