import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      title: "John",
      image: "guest1.jpg",
      text: "I go regulary to Little Lemon to have lunch with my friends. I simply love the food!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Mary",
      image: "guest2.jpg",
      text: "The food at Little Lemon is high quality and very tasty.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Margret",
      image: "guest3.jpg",
      text: "When there's something to celebrate, like a birthday, the whole family goes to Little Lemon.",
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Bill",
      image: "guest4.jpg",
      text: "For me, a stay at Little Lemon is like a small holiday in Italy.",
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
