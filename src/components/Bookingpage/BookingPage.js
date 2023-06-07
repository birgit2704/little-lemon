import BookingForm from "./BookingForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";

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
    <div>
      <Header />
      <BookingForm availableTimes={availableTimes} />
      <Footer />
    </div>
  );
};

export default BookingPage;
