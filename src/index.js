import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Main />}>
      <Route path="/" element={<Homepage />} />
      <Route path="reservations" element={<BookingPage />} />
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
