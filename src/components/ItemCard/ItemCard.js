import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { useEffect, useState } from "react";
import { TYPE_COLOR } from "../../utils/Constants";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../../utils/PokeApi";

const ItemCard = ({ pokemon }) => {
  console.log(pokemon);
  const { data } = useQuery({
    queryKey: ["pokemonData"],
    queryFn: async () =>
      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(
        (res) => res.json()
      ),
  });
  console.log(data);

  // console.log(pokemonDetails);
  // const [pokemonData, setPokemonData] = useState([]);

  // const fetchPokemonData = async () => {
  //   const res = await getPokemon(pokemon.url);

  //   const promises = res.results.map((data) => {
  //     return data;
  //   });

  //   const results = await Promise.all(promises);
  //   console.log(results);
  // };

  // useEffect(() => {
  //   fetchPokemonData();
  // }, []);

  return (
    <Link to={`pokemon/${pokemon.name}`}>
      <li
        className="card"
        style={{
          backgroundColor: `${TYPE_COLOR[pokemon.types[0].type.name]}`,
        }}
      >
        <div className="card__image-container">
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="card__image"
          />
        </div>
        <p className="card__name">{pokemon.name}</p>
        <div className="card__move-wrapper">
          {pokemon.moves.slice(0, 3).map((move, i) => {
            return (
              <p className="card__move" key={i}>
                {move.move.name}
              </p>
            );
          })}
        </div>
      </li>
    </Link>
  );
};

export default ItemCard;
