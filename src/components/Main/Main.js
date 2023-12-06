import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import About from "../About/About";

const Main = ({
  pokemonData,
  onShowMore,
  onChange,
  onSubmit,
  onSelectCard,
}) => {
  // console.log(pokemonData);

  return (
    <main className="main">
      <form className="form__search">
        <input className="form__search-input" onChange={onChange}></input>
        <button className="form__search-btn" type="submit" onSubmit={onSubmit}>
          Search
        </button>
      </form>

      <section className="cards">
        <div className="card__header">Pokemon</div>

        <ul className="card__list">
          {pokemonData.map((pokemon, i) => {
            return (
              <ItemCard key={i} pokemon={pokemon} onSelectCard={onSelectCard} />
            );
          })}
        </ul>
        <button className="card__list-btn" type="button" onClick={onShowMore}>
          Show More
        </button>
      </section>
      <About />
    </main>
  );
};

export default Main;
