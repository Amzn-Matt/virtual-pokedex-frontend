const ItemCard = () => {
  return (
    <li className="card">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu"
        className="card__image"
      />
      <p className="card__name">Pikachu</p>
      <p className="card__type"> Type: Electric</p>
    </li>
  );
};

export default ItemCard;
