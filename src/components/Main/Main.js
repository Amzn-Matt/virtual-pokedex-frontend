import "./Main.css";
import { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import { getGlobalPokemon } from "../../utils/PokeApi";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const Main = () => {
  const limit = 20;
  const [offset, setOffset] = useState(0);

  // const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  // const [search, setSearch] = useState("");
  // const [globalPokemon, setGlobalPokemon] = useState([]);
  // const [globalPokemonStats, setGlobalPokemonStats] = useState([]);
  // const [isLarge, setIsLarge] = useState(true);

  // const handleSearch = (e) => {
  //   const text = e.toLowerCase();
  //   setSearch(text);
  // };

  const { data, error, isError, isLoading, isPlaceholderData } = useQuery({
    queryKey: ["pokemon", limit, offset],
    queryFn: async () =>
      await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      ).then((res) => res.json()),
    placeholderData: keepPreviousData,
  });
  console.log(data);

  const handleNextClick = () => {
    setOffset((prev) => prev + 20);
  };

  const handlePreviousClick = () => {
    setOffset((prev) => prev - 20);
  };

  // const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  // const fetchGlobalPokemon = async () => {
  //   const res = await getGlobalPokemon(`${baseUrl}?limit=1000&offset=0`);

  //   const promises = res.results.map((pokemon) => {
  //     return pokemon;
  //   });

  //   const results = await Promise.all(promises);
  //   setGlobalPokemon(results);
  // };
  // // console.log(globalPokemon);

  // const filteredPokemon =
  //   search.length > 0
  //     ? globalPokemon?.filter((pokemon) => pokemon.name?.includes(search))
  //     : data;

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
      // className="form__search-input"
      // onChange={(e) => {
      //   handleSearch(e.target.value);
      // }}
      ></input> */}
      <section className="cards">
        {/* {!isLoading && filteredPokemon.length === 0 && <NotFound />} */}
        {isLoading ? (
          <Preloader />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <ul className="card__list">
              {data?.results?.map((pokemon, i) => {
                return <ItemCard key={i} pokemon={pokemon} />;
              })}
            </ul>
            <div className="card__button-wrapper">
              {data.previous && (
                <button
                  className="card__list-btn"
                  type="button"
                  onClick={handlePreviousClick}
                >
                  Previous Page
                </button>
              )}
              {isPlaceholderData ||
                (data.next && (
                  <button
                    className="card__list-btn"
                    type="button"
                    onClick={handleNextClick}
                  >
                    Next Page
                  </button>
                ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Main;
