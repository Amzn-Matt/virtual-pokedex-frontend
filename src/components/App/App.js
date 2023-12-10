import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import About from "../About/About";
import Footer from "../Footer/Footer.js";
import Profile from "../Profile/Profile.js";
import PokemonPage from "../PokemonPage/PokemonPage.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import LoginModal from "../LoginModal/LoginModal.js";
import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../../utils/PokeApi.js";
import { Route, Switch } from "react-router-dom";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await getAllPokemon(baseUrl);
    // console.log(response);
    setPrevUrl(response.previous);
    setNextUrl(response.next);
    loadingPokemon(response.results)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const loadingPokemon = async (data) => {
    const pokemon = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonArray = await getPokemon(pokemon.url);
        return pokemonArray;
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
      <Header
        onSignUp={handleOpenRegisterModal}
        onLogin={handleOpenLoginModal}
      />
      <Switch>
        <Route exact path="/">
          <Main
            pokemonData={pokemonData}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            prevUrl={prevUrl}
            nextUrl={nextUrl}
            isLoading={isLoading}
          />
          <About isLoading={isLoading} />
        </Route>
        <Route path="/profile">
          <Profile pokemonData={pokemonData} />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonPage isLoading={isLoading} />
        </Route>
      </Switch>

      {activeModal === "register" && (
        <RegisterModal
          onCloseModal={handleCloseModal}
          buttonText={isLoading ? "Next..." : "Next"}
          altButtonText={"or Log in"}
          onAltButton={handleOpenLoginModal}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          onCloseModal={handleCloseModal}
          buttonText={isLoading ? "Loging In...." : "Login"}
          altButtonText={"or Register"}
          onAltButton={handleOpenRegisterModal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
