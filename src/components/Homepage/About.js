const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <article className="about-article">
          <h1 className="about-title">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-description">
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily special.
          </p>
        </article>

        <figure>
          <img
            className="about-image"
            src={require(`../../assets/images/Mario and Adrian A.jpg`)}
            alt="Mario and Adrian"
          />
        </figure>
      </section>
    </div>
  );
};

export default About;
