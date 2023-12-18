import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import CollectionSection from "./CollectionSection/CollectionSection";

const Profile = ({ pokemonData, onLogout }) => {
  console.log(pokemonData);
  return (
    <main className="profile">
      <SideBar onLogout={onLogout} />
      <CollectionSection pokemonData={pokemonData} />
    </main>
  );
};

export default Profile;
