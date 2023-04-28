import SpecialCard from "./SpecialCard";

const Specials = () => {
  const specials = [
    {
      image: "greek salad.jpg",
      title: "Greek salad",
      price: "$12.00",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      image: "bruchetta.svg",
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      image: "lemon dessert.jpg",
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

      <div className="cards-container">
        {specials.map((special) => (
          <SpecialCard
            key={special.title}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Specials;
