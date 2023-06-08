import React from "react";
import { useNavigate } from "react-router";
import restauranfood from "../../assets/images/restauranfood.jpg";

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <section aria-label="hero" className="hero-section">
        <article className="hero-article">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            className="hero-button"
            onClick={() => navigate("/reservations")}
          >
            Reserve a table
          </button>
        </article>

        <figure>
          <img alt="logo" className="restauranfood" src={restauranfood} />
        </figure>
      </section>
    </div>
  );
};

export default Herosection;
