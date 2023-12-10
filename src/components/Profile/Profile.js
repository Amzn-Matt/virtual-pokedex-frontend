import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import CollectionSection from "./CollectionSection/CollectionSection";

const Profile = ({ pokemonData }) => {
  console.log(pokemonData);
  return (
    <main className="profile">
      <SideBar />
      <CollectionSection pokemonData={pokemonData} />
    </main>
  );
};

export default Profile;
