import BookingForm from "./BookingForm";
import "../Homepage/homepage.css";
import bookingPagePhoto from "../../assets/images/table.jpg";

const BookingPage = () => {
  return (
    <div className="bookingPageBody">
      <h2 className="bookingPageHeader">Table Reservation</h2>
      <main className="bookingMain">
        <aside className="bookingAside">
          <img
            className="bookingPagePhoto"
            src={bookingPagePhoto}
            alt="wineglasses on table"
          />

          <h3>Conditions</h3>
          <p>we hold the table for 30 min</p>
        </aside>

        <BookingForm />
      </main>
    </div>
  );
};

export default BookingPage;
