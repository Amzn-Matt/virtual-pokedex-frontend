import "./CollectionSection.css";
import ItemCard from "../../ItemCard/ItemCard";

const CollectionSection = ({ pokemonData }) => {
  return (
    <section className="collection-section">
      <div className="collection__wrapper">
        <h3 className="collection__title">Your Collection</h3>
        <ul className="collection__cards">
          {pokemonData.map((pokemon) => {
            return <ItemCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default CollectionSection;
