const SpecialCard = (props) => {
  return (
    <div aria-label="food specials" className="card-container">
      <div className="image-container">
        <img
          className="card-image"
          src={require(`../../assets/images/${props.image}`)}
          alt={props.title}
        />
      </div>
      <div className="card-text-container">
        <div className="card-first-line">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-price">{props.price}</p>
        </div>

        <p className="card-description">{props.description}</p>
        <p className="card-order">Order a delivery</p>
      </div>
    </div>
  );
};

export default SpecialCard;
