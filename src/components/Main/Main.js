import "./Main.css";
import { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Preloader from "../Preloader/Preloader";
import { getGlobalPokemon, getPokemon } from "../../utils/PokeApi";

const Main = ({
  pokemonData,
  onNextPage,
  onPreviousPage,
  prevUrl,
  nexUrl,
  isLoading,
}) => {
  // const [input, setInput] = useState("");
  // const [globalPokemon, setGlobalPokemon] = useState([]);

  // const handleInputChange = (e) => {
  //   setInput(e.target.value);
  // };

  // const baseUrl = "https://pokeapi.co/api/v2/";

  // const fetchGlobalPokemon = async () => {
  //   const res = await getGlobalPokemon(
  //     `${baseUrl}pokemon?limit=10000&offset=0`
  //   );
  //   const data = await res;
  //   // setGlobalPokemon(data.results);

  //   const promises = data.results.map(async (pokemon) => {
  //     const res = await fetch(pokemon.url);
  //     const data = await res.json();
  //     return data;
  //   });
  //   const results = await Promise.all(promises);
  //   console.log(results);
  // };

  // useEffect(() => {
  //   fetchGlobalPokemon();
  // }, []);

  return (
    <main className="main">
      <input
        className="form__search-input"
        // onChange={handleInputChange}
      ></input>
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
