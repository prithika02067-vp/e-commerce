
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="tagline">WELCOME TO POKESHOP</p>

        <h1>Catch Your Favorite Pokémon!</h1>

        <p>
          Explore amazing Pokémon characters and find
          your favorite products in our online store.
        </p>

        <Link to="/products" className="shop-btn">
          Shop Now
        </Link>
      </div>

      <img
        className="hero-image"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Pikachu"
      />
    </section>
  );
}

export default Home;