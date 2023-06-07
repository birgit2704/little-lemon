import React, { createContext, useReducer } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

export const TimeContext = createContext({});

const Main = () => {
  const timeReducer = (times, action) => {
    if (action.type === "UpdateTimes") return action.time;
    if (action.type === "InitializeTimes") return times;
    return times;
  };

  const [times, dispatch] = useReducer(timeReducer, [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <TimeContext.Provider value={{ times, dispatch }}>
      <Header />
      <Outlet />
      <Footer />
    </TimeContext.Provider>
  );
};

export default Main;
