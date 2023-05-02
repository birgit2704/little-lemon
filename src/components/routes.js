import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import BookingPage from "./Bookingpage/BookingPage";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/reservations", element: <BookingPage /> },
]);

export default router;
