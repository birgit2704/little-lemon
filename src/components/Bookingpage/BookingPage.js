import BookingForm from "./BookingForm";
import "../../components/global.css";
import bookingPagePhoto from "../../assets/images/table.jpg";

const BookingPage = () => {
  return (
    <div aria-label="booking page" className="bookingPageBody">
      <h2 className="bookingPageHeader">Table Reservation</h2>
      <main className="bookingMain">
        <aside className="bookingAside">
          <img
            className="bookingPagePhoto"
            src={bookingPagePhoto}
            alt="wineglasses on table"
          />

          <div className="bookingTextContainer">
            <h3>Conditions</h3>
            <p>we hold the table for 30 min</p>
            <p>
              Please note: Yout cannot edit your reservation after submission.
            </p>
            <p>
              Please double-check your answer before submitting your reservation
              request.
            </p>
          </div>
        </aside>

        <BookingForm />
      </main>
    </div>
  );
};

export default BookingPage;
