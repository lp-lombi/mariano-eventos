import "./Card.css";

function Card({ title, text, img }) {
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      {img && <img src={img} alt={title} className="card__img" />}
    </article>
  );
}

export default Card;
