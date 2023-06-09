import React from "react";
import { Link } from "react-router-dom";

const SubmissionMessage = () => {
  return (
    <div className="submissionMessage" aria-label="submission message">
      <h2>Thank you for your reservation!</h2>
      <h3>We will send the booking confirmation to your email address</h3>
      <br />
      <p>We are looking forward to seeing you!</p>
      <p>
        <i>Your little lemon team</i>
      </p>
      <Link to="/">
        <button>Back to homepage</button>
      </Link>
    </div>
  );
};

export default SubmissionMessage;
