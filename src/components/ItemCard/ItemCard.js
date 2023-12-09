import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TYPE_COLOR } from "../../utils/Constants";

const ItemCard = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <Link to={`pokemon/${pokemon.name}`}>
      <li
        className="card"
        style={{
          backgroundColor: `${TYPE_COLOR[pokemon.types[0].type.name]}`,
        }}
      >
        <div className="card__image-container">
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="card__image"
          />
        </div>
        <p className="card__name">{pokemon.name}</p>
        <div className="card__move-wrapper">
          {pokemon.moves.slice(0, 3).map((move, i) => {
            return (
              <p className="card__move" key={i}>
                {move.move.name}
              </p>
            );
          })}
        </div>
      </li>
    </Link>
  );
};

export default ItemCard;
