import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import About from "../About/About";

const Main = () => {
  return (
    <main className="main">
      <form className="form__search">
        <input className="form__search-input"></input>
        <button className="form__search-btn" type="submit">
          Search
        </button>
      </form>

      <section className="cards">
        <div className="card__header">Pokemon</div>

        <ul className="card__list">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </ul>
      </section>
      <About />
    </main>
  );
};

export default Main;
