
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  }

  return (
    <>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} removeFromCart={removeFromCart} />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;