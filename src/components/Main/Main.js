import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import About from "../About/About";
const Main = ({ pokemonData, onNextPage, onPreviousPage, prevUrl, nexUrl }) => {
  return (
    <main className="main">
      <input className="form__search-input"></input>
      <section className="cards">
        <ul className="card__list">
          {pokemonData.map((pokemon, i) => {
            return <ItemCard key={i} pokemon={pokemon} />;
          })}
        </ul>
        <div className="card__button-wrapper">
          {prevUrl && (
            <button
              className="card__list-btn"
              type="button"
              onClick={onPreviousPage}
            >
              Previous Page
            </button>
          )}
          {!nexUrl && (
            <button
              className="card__list-btn"
              type="button"
              onClick={onNextPage}
            >
              Next Page
            </button>
          )}
        </div>
      </section>
      <About />
    </main>
  );
};

export default Main;
