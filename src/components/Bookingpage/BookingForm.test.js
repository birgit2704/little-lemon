import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("check if name exists", () => {
  render(<BookingForm />);
  const nameElement = screen.getByText(/name/i);
  expect(nameElement).toBeInTheDocument();
});

test("write a test for the initializeTimes function to validate that it returns the correct expected value", () => {
  render(<BookingForm />);
});

test("write a unit test for the updateTimes function to validate that it returns the same value that is provided in the state. This unit test is important as it will be updated later when the logic of changing the availabel times based on the selected date is implemented", () => {
  render(<BookingForm />);
});

// validation tests
//it is important to add a unit test for both valid and invalid states to ensure good
//test coverage of your code. Without this, there is a risk of a bug existing in a code
//path that is not tested.

test("name", () => {
  render(<BookingForm />);
});

test("name", () => {
  render(<BookingForm />);
});

test("email", () => {
  render(<BookingForm />);
});

test("email", () => {
  render(<BookingForm />);
});

test("date", () => {
  render(<BookingForm />);
});

test("date", () => {
  render(<BookingForm />);
});

test("time", () => {
  render(<BookingForm />);
});

test("time", () => {
  render(<BookingForm />);
});

test("guests", () => {
  render(<BookingForm />);
});

test("guests", () => {
  render(<BookingForm />);
});

test("occasion", () => {
  render(<BookingForm />);
});

test("occasion", () => {
  render(<BookingForm />);
});
