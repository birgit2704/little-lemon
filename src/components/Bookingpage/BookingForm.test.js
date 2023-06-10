import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("check if name exists", () => {
  render(<BookingForm />);
  const nameElement = screen.getByText(/name/i);
  expect(nameElement).toBeInTheDocument();
});

test("correct initialization of times", () => {
  render(<BookingForm />);
  const timesArray = screen.getAllByTestId("timeoption");
  expect(timesArray.length).toBe(15);
});

test("updateTimes function works correctly", () => {
  render(<BookingForm />);
  const date = screen.getByLabelText(/Choose date/i);
  fireEvent.change(date, { target: { value: new Date() } });
  const timesArray = screen.getAllByTestId("timeoption");
  expect(timesArray.length).toBeLessThan(19);
});

test("error message if name is shorter than 3 chars", async () => {
  render(<BookingForm />);
  const name = screen.getByLabelText(/Name/i);
  fireEvent.change(name, { target: { value: "a" } });
  fireEvent.submit(name);
  const error = await screen.findByText("Name must be at least 3 characters");
  expect(error).toBeInTheDocument();
});

test("error message if email is not of correct format", async () => {
  render(<BookingForm />);
  const email = screen.getByLabelText(/Email/i);
  fireEvent.change(email, { target: { value: "abcdefg.de" } });
  fireEvent.submit(email);
  const error = await screen.findByText(/invalid email/i);
  expect(error).toBeInTheDocument();
});

test("error message if no date is chosen", async () => {
  render(<BookingForm />);
  const date = screen.getByLabelText(/Choose date/i);
  fireEvent.change(date, { target: { value: "TT.MM.JJJJ" } });
  fireEvent.submit(date);
  const error = await screen.findByText(/invalid date/i);
  expect(error).toBeInTheDocument();
});

test("error message if no time is chosen", async () => {
  render(<BookingForm />);
  const time = screen.getByLabelText(/Choose time/i);
  fireEvent.change(time, { target: { value: "" } });
  fireEvent.submit(time);
  const error = await screen.findByText(/please choose a time/i);
  expect(error).toBeInTheDocument();
});

test("error message if no guest is chosen", async () => {
  render(<BookingForm />);
  const guests = screen.getByLabelText(/Guests/i);
  fireEvent.change(guests, { target: { value: "" } });
  fireEvent.submit(guests);
  const error = await screen.findByText(/number of guests is required/i);
  expect(error).toBeInTheDocument();
});
