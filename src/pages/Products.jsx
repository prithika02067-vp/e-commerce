
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(async (response) => {
        const details = await Promise.all(
          response.data.results.map(async (pokemon, index) => {
            const result = await axios.get(pokemon.url);
            const data = result.data;

            return {
              id: data.id,
              name:
                data.name.charAt(0).toUpperCase() +
                data.name.slice(1),
              image: data.sprites.front_default,
              price: (index + 1) * 100,
            };
          })
        );

        setProducts(details);
      })
      .catch(() => {
        setError("Unable to load products. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="status">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="status">{error}</h2>;
  }

  return (
    <section className="products-section">
      <h1>Our Products</h1>
      <p>Choose your favorite Pokémon!</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;