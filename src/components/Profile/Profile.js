import "./Profile.css";
import ItemCard from "../ItemCard/ItemCard";
import SideBar from "./SideBar/SideBar";

const Profile = ({ pokemonData }) => {
  console.log(pokemonData);
  return (
    <main className="profile">
      <h2 className="profile__header">
        Welome Back Trainer! You currently have 2 Pokémon in your personal
        collection
      </h2>
      <section className="collection-section">
        <div className="collection__wrapper">
          <h3 className="collection__title">Your Collection</h3>
          <ul className="collection__cards">
            {pokemonData.map((pokemon) => {
              return <ItemCard key={pokemon.id} pokemon={pokemon} />;
            })}
          </ul>
        </div>
        <SideBar />
      </section>
    </main>
  );
};

export default Profile;
