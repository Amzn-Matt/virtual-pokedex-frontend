import "./PokemonPage.css";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonSpecies, getPokemonStats } from "../../utils/PokeApi";
import { TYPE_COLOR } from "../../utils/Constants";
import { TfiRuler } from "react-icons/tfi";
import { LiaWeightHangingSolid } from "react-icons/lia";
import Preloader from "../Preloader/Preloader";

const PokemonPage = ({ isLoading }) => {
  const params = useParams();
  const [pokemonId, setPokemonId] = useState({});
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [selectedImage, setSelectedImage] = useState("original");

  const IMAGE_URLS = {
    original: pokemonId?.sprites?.other["official-artwork"].front_default,

    shiny: pokemonId?.sprites?.other["official-artwork"].front_shiny,
  };
  const imageVariants = ["original", "shiny"];

  let description = "";
  pokemonDetails.flavor_text_entries?.some(function (entry) {
    if (entry.language.name === "en") {
      description = entry.flavor_text;
      return description;
    }
    return description;
  });

  let species = "";
  pokemonDetails.genera?.some(function (gen) {
    if (gen.language.name === "en") {
      species = gen.genus;
      return species;
    }
    return species;
  });

  const getDetails = async () => {
    await getPokemonSpecies(
      `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
    )
      .then((data) => {
        const details = data;

        // console.log(details);
        setPokemonDetails(details);
      })
      .catch(console.error);
  };

  useEffect(() => {
    const getPokemon = async () => {
      await getPokemonStats(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((res) => {
          const pokemon = res;
          // console.log(pokemon);

          setPokemonId(pokemon);
        })
        .catch(console.error);
    };
    getPokemon();
    getDetails();
  }, []);

  return (
    <main className="pokemon__profile">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {" "}
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
            src={IMAGE_URLS[selectedImage]}
            alt={pokemonId.name}
          />
          <div className="pokemon__image-btn-wrapper">
            {imageVariants.map((image, i) => {
              return (
                <button
                  key={i}
                  className="image__button"
                  style={{
                    backgroundColor: `${
                      selectedImage === image ? "#2f71e5" : "#d3d3d3"
                    }`,
                    color: "white",
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  {image}
                </button>
              );
            })}
          </div>
          <span className="pokemon__genus">{species}</span>
          <span className="pokemon__entry">{description}</span>
          <div className="pokemon__details-container">
            <span className="pokemon__weight">
              <LiaWeightHangingSolid />
              {(Math.round(pokemonId.weight * 0.220462 + 0.0001) * 100) / 100}
              lbs
            </span>
            <span className="pokemon__height">
              <TfiRuler />
              {Math.round(
                ((pokemonId.height * 0.3280839895 + 0.0001) * 100) / 100
              )}
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
        </>
      )}
    </main>
  );
};

export default PokemonPage;
