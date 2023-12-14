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
  const [search, setSearch] = useState("");
  const [globalPokemon, setGlobalPokemon] = useState([]);
  const [globalPokemonStats, setGlobalPokemonStats] = useState([]);

  const handleSearch = (e) => {
    const text = e.toLowerCase();
    setSearch(text);
  };

  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  const fetchGlobalPokemon = async () => {
    const res = await getGlobalPokemon(`${baseUrl}?limit=1000&offset=0`);
    const data = await res;
    setGlobalPokemon(data.results);
    console.log(globalPokemon);

    const allPokemon = await Promise.all(
      globalPokemon.map(async (pokemon) => {
        const allPokemonArray = await getPokemon(pokemon.url);
        return allPokemonArray;
      })
    );
    console.log(allPokemon);
    setGlobalPokemonStats(allPokemon);
  };

  const filteredPokemon =
    search.length > 0
      ? globalPokemonStats?.filter((pokemon) => pokemon.name?.includes(search))
      : pokemonData;

  console.log(filteredPokemon);

  useEffect(() => {
    fetchGlobalPokemon();
  }, []);

  return (
    <main className="main">
      <input
        className="form__search-input"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      ></input>
      <section className="cards">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {" "}
            <ul className="card__list">
              {filteredPokemon.map((pokemon, i) => {
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
