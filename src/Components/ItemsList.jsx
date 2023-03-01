import { useState } from "react";
import { products } from "../productsMock";

export const ItemsList = () => {
  const [cart, setCart] = useState([]); //Create state

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h1>Productos</h1>
      {products.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid black" }}>
            <h2>{product.name}</h2>
            <img src={product.img} alt="" />
            <h4> $ {product.price}.-</h4>
            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        );
      })}

      <h1>Aca está mi carrito</h1>
      <h2>{cart.length}</h2>
      {cart.map((element) => {
        return (
          <div key={element.id} style={{ border: "2px solid black" }}>
            <h2>{element.name}</h2>
            <h3>{element.price}</h3>
          </div>
        );
      })}
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};
