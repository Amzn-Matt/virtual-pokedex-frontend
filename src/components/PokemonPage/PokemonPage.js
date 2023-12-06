import "./PokemonPage.css";

const PokemonPage = ({ selectedCard }) => {
  console.log(selectedCard);
  return (
    <main className="pokemon__profile">
      <h2 className="pokemon__title">{selectedCard.name}</h2>
    </main>
  );
};

export default PokemonPage;
