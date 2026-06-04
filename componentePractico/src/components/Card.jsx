function Card({ image, title, description, extraInfo, buttonText, onAction }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <div className="card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <p className="extra-info">{extraInfo}</p>

        <button onClick={onAction}>{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;