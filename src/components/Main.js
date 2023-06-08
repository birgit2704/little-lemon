import React, { createContext, useReducer } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import fetchData, { fetchAPI } from "../fetchData";

export const TimeContext = createContext({});

const timeReducer = (times, action) => {
  if (action.type === "UpdateTimes")
    return { times: fetchAPI().then((res) => res.json()) };
  if (action.type === "InitializeTimes")
    return { times: fetchAPI().then((res) => res.json()) };
};

const Main = () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const [times, dispatch] = useReducer(timeReducer, initialState);

  return (
    <TimeContext.Provider value={{ times, dispatch }}>
      <Header />
      <Outlet />
      <Footer />
    </TimeContext.Provider>
  );
};

export default Main;
