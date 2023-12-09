import "./PokemonPage.css";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import { TYPE_COLOR } from "../../utils/Constants";
import { TfiRuler } from "react-icons/tfi";
import { LiaWeightHangingSolid } from "react-icons/lia";

const PokemonPage = () => {
  const params = useParams();
  const [pokemonId, setPokemonId] = useState({});
  const [pokemonDetails, setPokemonDetails] = useState({});

  let description = "";
  pokemonDetails.flavor_text_entries?.some((entry) => {
    if (entry.language.name === "en") {
      description = entry.flavor_text;
      return;
    }
  });

  let species = "";
  pokemonDetails.genera?.some((gen) => {
    if (gen.language.name === "en") {
      species = gen.genus;
      return;
    }
  });

  const getDetails = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
    );
    const details = await data.json();

    console.log(details);
    setPokemonDetails(details);
  };

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
      const pokemon = await res.json();
      console.log(pokemon);

      setPokemonId(pokemon);
    };
    getPokemon();
    getDetails();
  }, [params.id]);

  return (
    <main className="pokemon__profile">
      <div className="pokemon__info-container">
        <h4 className="pokemon__index">Pokemon #{pokemonId.order}</h4>
        <h2 className="pokemon__name">{pokemonId.name}</h2>
        <div className="pokemon__types-wrapper">
          {pokemonId?.types?.map((type, i) => {
            return (
              <span
                style={{
                  backgroundColor: `${TYPE_COLOR[type.type.name]}`,
                }}
                className="pokemon__types"
                key={i}
              >
                {type.type.name}
              </span>
            );
          })}
        </div>
      </div>
      <img
        className="pokemon__image"
        src={pokemonId?.sprites?.other.dream_world.front_default}
      />
      <span className="pokemon__genus">{species}</span>
      <span className="pokemon__entry">{description}</span>
      <div className="pokemon__details-container">
        <span className="pokemon__weight">
          <LiaWeightHangingSolid />
          {(Math.round(pokemonId.weight * 0.220462 + 0.0001) * 100) / 100}lbs
        </span>
        <span className="pokemon__height">
          <TfiRuler />
          {Math.round(((pokemonId.height * 0.3280839895 + 0.0001) * 100) / 100)}
          ft
        </span>
      </div>
      <div className="pokemon__abilities-container">
        Abilities:
        {pokemonId?.abilities?.map((ability, i) => {
          return (
            <span className="pokemon__ability" key={i}>
              {ability.ability.name}
            </span>
          );
        })}
      </div>{" "}
      {pokemonId.stats?.map((stat, i) => {
        return (
          <div key={i} className="pokemon__stats-container">
            <span className="pokemon__stat-name"> {stat.stat.name} </span>
            <progress
              value={stat.base_stat}
              max={130}
              className="pokemon__progress"
            ></progress>
            <span>{stat.base_stat}</span>
          </div>
        );
      })}
    </main>
  );
};

export default PokemonPage;
