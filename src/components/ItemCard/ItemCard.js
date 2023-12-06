const ItemCard = ({ pokemon }) => {
  let myLink = "";

  const { "official-artwork": link } = pokemon?.sprites.other;
  myLink = link.front_shiny;

  return (
    <li className="card">
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
  );
};

export default ItemCard;
