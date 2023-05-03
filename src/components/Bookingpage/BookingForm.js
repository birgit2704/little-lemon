import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
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
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
