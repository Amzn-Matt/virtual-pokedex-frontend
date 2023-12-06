import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ItemCard = ({ pokemon, onSelectCard }) => {
  const handleCardClick = () => {
    onSelectCard(pokemon);
  };

  let myLink = "";

  const { "official-artwork": link } = pokemon?.sprites.other;
  myLink = link.front_shiny;

  return (
    <Link to={`pokemon/${pokemon.name}`}>
      <li className="card" onClick={handleCardClick}>
        <img src={myLink} alt={pokemon.name} className="card__image" />
        <p className="card__name">{pokemon.name}</p>
        <div className="card__type-wrapper">
          {pokemon.types.map((type, i) => {
            return (
              <p className="card__type" key={i}>
                {type.type.name}
              </p>
            );
          })}
        </div>
      </li>
    </Link>
  );
};

export default ItemCard;
