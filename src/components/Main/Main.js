import "./Main.css";
import { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Preloader from "../Preloader/Preloader";
// import NotFound from "../NotFound/NotFound";
// import { fetchAllPokemon } from "../../utils/PokeApi";
import { useQuery } from "@tanstack/react-query";

const Main = ({
  pokemonData,
  onNextPage,
  onPreviousPage,
  prevUrl,
  nexUrl,
  isLoading,
}) => {
  const limit = 20;
  const offset = 0;

  // const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  // const [search, setSearch] = useState("");
  // const [globalPokemon, setGlobalPokemon] = useState([]);
  // const [globalPokemonStats, setGlobalPokemonStats] = useState([]);
  // const [isLarge, setIsLarge] = useState(true);

  // const handleSearch = (e) => {
  //   const text = e.toLowerCase();
  //   setSearch(text);
  // };

  const { data } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () =>
      await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      ).then((res) => res.json()),
  });
  // console.log(data);

  // const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  // const fetchGlobalPokemon = async () => {
  //   const res = await getGlobalPokemon(`${baseUrl}?limit=1000&offset=0`);

  //   const promises = res.results.map((pokemon) => {
  //     return pokemon;
  //   });

  //   const results = await Promise.all(promises);
  //   setGlobalPokemon(results);
  // };

  // const filteredPokemon =
  //   search.length > 0
  //     ? globalPokemon?.filter((pokemon) => pokemon.name?.includes(search))
  //     : pokemonData;

  // console.log(filteredPokemon);

  // const checkIsLarge = () => {
  //   if (filteredPokemon.length > 20) {
  //     setIsLarge(true);
  //   } else {
  //     setIsLarge(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchGlobalPokemon();
  // }, []);

  return (
    <main className="main">
      {/* <input
        className="form__search-input"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      ></input> */}
      <section className="cards">
        {/* {!isLoading && filteredPokemon.length === 0 && <NotFound />} */}
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {" "}
            <ul className="card__list">
              {data?.results?.map((pokemon, i) => {
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
