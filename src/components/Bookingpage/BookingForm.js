import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email(),
  date: z.coerce.date().refine((data) => data > new Date(), {
    message: "Date must be in the future",
  }),
  time: z.enum(["17", "18", "19"], {
    errorMap: () => ({ message: "Please choose a time" }),
  }),
  guests: z
    .number({ invalid_type_error: "Number of guests is required" })
    .min(1, { message: "Number of guests can be between 1 and 10" })
    .max(10, { message: "Maximum number of guests is 10" }),
});

const BookingForm = () => {
  const availableTimes = ["", "17", "18", "19"];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="form-container">
      <form
        aria-label="booking form"
        className="booking-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">Name</label>
        <input {...register("name")} id="name" type="text" />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <label htmlFor="email">Email</label>
        <input {...register("email")} id="email" type="email" />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <label htmlFor="date">Choose date</label>
        <input {...register("date")} id="date" type="date" />
        {errors.date && <p style={{ color: "red" }}>{errors.date.message}</p>}
        <label htmlFor="time">Choose time</label>
        <select {...register("time")}>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        {errors.time && <p style={{ color: "red" }}>{errors.time.message}</p>}
        <label htmlFor="guests">Guests</label>
        <input
          {...register("guests", { valueAsNumber: true })}
          id="guests"
          type="number"
          placeholder="1"
        />
        {errors.guests && (
          <p style={{ color: "red" }}>{errors.guests.message}</p>
        )}
        <label htmlFor="occasion">Special Occasion?</label>
        <select {...register("occasion")} id="occasion">
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
        </select>
        <input
          aria-label="button to reserve"
          className="button"
          type="submit"
          value="Reserve"
        />
      </form>
    </div>
  );
};

export default BookingForm;
