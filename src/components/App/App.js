import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Profile from "../Profile/Profile.js";
import PokemonPage from "../PokemonPage/PokemonPage.js";
import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../../utils/PokeApi.js";
import { Route, Switch } from "react-router-dom";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  // const [selectedCard, setSelectedCard] = useState({});
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  const fetchData = async () => {
    const response = await getAllPokemon(baseUrl);
    // console.log(response);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    loadingPokemon(response.results);
  };

  const loadingPokemon = async (data) => {
    const pokemon = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonObj = await getPokemon(pokemon.url);
        return pokemonObj;
      })
    );
    setPokemonData(pokemon);
  };

  const handleNextPage = async () => {
    const data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  };

  const handlePreviousPage = async () => {
    if (!prevUrl) return;
    const data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  };

  // const handleSelectedCard = async () => {
  //   const res = await getAllPokemon(baseUrl);
  //   await loadingPokemon(res.results);
  //   setSelectedCard(res.results);
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main
            pokemonData={pokemonData}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            prevUrl={prevUrl}
            nextUrl={nextUrl}
          />
        </Route>
        <Route path="/profile">
          <Profile pokemonData={pokemonData} />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
