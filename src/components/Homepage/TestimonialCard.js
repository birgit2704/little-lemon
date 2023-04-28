import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-box">
      <h4 className="testimonial-title">{props.title}</h4>
      <div className="testimonial-photo-text-container">
        <img
          className="testimonial-photo"
          src={require(`../../assets/images/${props.image}`)}
          alt="guest"
          width="40%"
        />
        <p className="testimonial-text">{props.text}</p>
      </div>
      <p className="testimonial-rating ">{props.rating}</p>
    </div>
  );
};

export default TestimonialCard;
