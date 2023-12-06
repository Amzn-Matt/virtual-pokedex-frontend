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
  const [selectedCard, setSelectedCard] = useState({});
  const [search, setSearch] = useState("");
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  const fetchData = async () => {
    const response = await getAllPokemon(baseUrl);
    console.log(response);
    setNextUrl(response.next);
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

  const handleShowMore = async () => {
    const showMore = await getAllPokemon(nextUrl);
    await loadingPokemon(showMore.results);
    setNextUrl(showMore.next);
  };

  const handleSelectedCard = async () => {
    const res = await getAllPokemon(baseUrl);
    await loadingPokemon(res.results);
    setSelectedCard(res.results);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

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
            onShowMore={handleShowMore}
            onChange={handleChange}
            onSelectCard={handleSelectedCard}
          />
        </Route>
        <Route path="/profile">
          <Profile pokemonData={pokemonData} />
        </Route>
        <Route path="/pokemon/">
          <PokemonPage selectedCard={selectedCard} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
