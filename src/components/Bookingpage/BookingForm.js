import React, { useState } from "react";

const BookingForm = ({ availableTimes }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();

  return (
    <div className="form-container">
      <form className="booking-form">
        <label htmlFor="name">Your name</label>
        <input onChange={() => setName(name)} value={name} type="text" />
        <label htmlFor="email">Your email</label>
        <input onChange={() => setEmail(email)} value={email} type="email" />
        <label htmlFor="res-date">Choose date</label>
        <input
          onChange={() => setDate(date)}
          value={date}
          type="date"
          id="res-date"
        />
        <label htmlFor="res-time">Choose time</label>
        <select onChange={() => setTime(time)} value={time} id="res-time ">
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
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
        <label htmlFor="occasion">Occasion</label>
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
        <input className="button" type="submit" value="Make your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
