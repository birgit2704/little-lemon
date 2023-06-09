import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Main from "./components/Main";
import Homepage from "./components/Homepage/Homepage";
import BookingPage from "./components/Bookingpage/BookingPage";
import LoginPage from "./components/LoginPage";
import OrderOnlinePage from "./components/OrderOnlinePage";
import MenuPage from "./components/MenuPage";
import SubmissionMessage from "./components/Bookingpage/SubmissionMessage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Main />}>
      <Route path="/" element={<Homepage />} />
      <Route path="reservations" element={<BookingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="orderonline" element={<OrderOnlinePage />} />
      <Route path="menu" element={<MenuPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
