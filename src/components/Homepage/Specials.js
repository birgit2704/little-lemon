import React from "react";
import greeksalad from "../../assets/images/greek salad.jpg";
import lemondessert from "../../assets/images/lemon dessert.jpg";
import bruchetta from "../../assets/images/bruchetta.svg";
import SpecialCard from "./SpecialCard";

const Specials = () => {
  const specials = [
    {
      image: { greeksalad },
      title: "Greek salad",
      price: "$12.00",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      image: { bruchetta },
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      image: { lemondessert },
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <section className="specials-container">
      <div className="specials-header">
        <h1 className="specials-title">This weeks specials!</h1>
        <button className="specials-button">Online Menu</button>
      </div>
      <SpecialCard />

      {/* <div className="specials-cards-container">
        {specials.map((special) => (
          <SpecialCard key={special.title} />
        ))}
      </div> */}
    </section>
  );
};

export default Specials;
