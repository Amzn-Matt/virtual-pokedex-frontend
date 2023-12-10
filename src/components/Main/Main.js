import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import Preloader from "../Preloader/Preloader";

const Main = ({
  pokemonData,
  onNextPage,
  onPreviousPage,
  prevUrl,
  nexUrl,
  isLoading,
}) => {
  return (
    <main className="main">
      <input className="form__search-input"></input>
      <section className="cards">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {" "}
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
          </>
        )}
      </section>
    </main>
  );
};

export default Main;
