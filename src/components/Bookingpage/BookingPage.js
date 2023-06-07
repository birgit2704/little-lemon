import BookingForm from "./BookingForm";
import { useState } from "react";
import "../Homepage/homepage.css";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <div className="bookingPageBody">
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
};

export default BookingPage;
