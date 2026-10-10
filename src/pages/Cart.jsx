
function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Subtotal: ₹{item.price * item.quantity}
                </p>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total Amount: ₹{total}</h2>
          <button onClick={() => alert("Demo checkout only!")}>
            Checkout
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;