import { useState } from "react";
import BookingForm from "./BookingForm";
// import "../../global.css";
import bookingPagePhoto from "../../assets/images/table.jpg";
import ConfirmedBooking from "./ConfirmedBooking";

const BookingPage = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const showForm = !submissionSuccess;
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
            <h3>Conditions:</h3>
            <br />
            <p>We hold the table for 30 min</p>
            <br />
            <p>Cancellations: call (555)555-1234</p>
          </div>
        </aside>

        {showForm && (
          <BookingForm setSubmissionSuccess={setSubmissionSuccess} />
        )}
        {submissionSuccess && <ConfirmedBooking />}
      </main>
    </div>
  );
};

export default BookingPage;
