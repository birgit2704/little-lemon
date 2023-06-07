import React, { useState, useContext } from "react";
import { TimeContext } from "../Main";

const BookingForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();

  const { times, dispatch } = useContext(TimeContext);

  return (
    <div className="form-container">
      <form className="booking-form">
        <label htmlFor="name">Name</label>
        <input onChange={() => setName(name)} value={name} type="text" />
        <label htmlFor="email">Email</label>
        <input onChange={() => setEmail(email)} value={email} type="email" />
        <label htmlFor="res-date">Choose date</label>
        <input
          onChange={() => setDate(date)}
          value={date}
          type="date"
          id="res-date"
        />
        <label htmlFor="res-time">Choose time</label>
        <select onChange={() => dispatch({ type: "UpdateTimes", time: times })}>
          {times.map((time) => (
            <option>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={guests}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={() => setGuests(guests)}
        />
        <label htmlFor="occasion">Special Occasion?</label>
        <select
          onChange={() => setOccasion(occasion)}
          value={occasion}
          id="occasion"
        >
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
        </select>
        <input className="button" type="submit" value="Reserve" />
      </form>
    </div>
  );
};

export default BookingForm;
