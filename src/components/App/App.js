import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import { useEffect, useState } from "react";
import { getAllPokemon } from "../../utils/PokeApi.js";

function App() {
  const [pokemonItems, setPokemonItems] = useState({});

  useEffect(() => {
    getAllPokemon().then((data) => {
      setPokemonItems(data.results);
    });
  }, []);

  // console.log(pokemonItems);

  return (
    <div className="app">
      <Header />
      <Main pokemonItems={pokemonItems} />
      <Footer />
    </div>
  );
}

export default App;
