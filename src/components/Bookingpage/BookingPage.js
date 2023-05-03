import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const BookingPage = () => {
  return (
    <div>
      <Header />
      <div>BookingPage</div>
      <BookingForm />
      <Link to="/">Home</Link>
      <Footer />
    </div>
  );
};

export default BookingPage;
