import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      title: "John",
      image: "guest1.jpg",
      text: "I love the food",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Mary",
      image: "guest2.jpg",
      text: "I love the desserts",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Margret",
      image: "guest3.jpg",
      text: "I love everything",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Bill",
      image: "guest4.jpg",
      text: "I love Little Lemon",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];
  return (
    <section className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonial-box-container">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.text}
            title={testimonial.title}
            image={testimonial.image}
            text={testimonial.text}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
