import React from "react";
import lemondessert from "../../assets/images/lemon dessert.jpg";

const SpecialCard = (props) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={lemondessert} alt="lemon cake" />
      </div>
      <div className="card-text-container">
        <div className="card-first-line">
          <h3 className="card-title">Lemon Dessert</h3>
          <p className="card-price">$5.00</p>
        </div>

        <p className="card-description">
          This comes straight from grandma's recipe book, every last ingredient
          has been sourced and is as authentic as can be imagined.
        </p>
        <p className="card-order">Order a delivery</p>
      </div>
    </div>
  );
};

export default SpecialCard;
