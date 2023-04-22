import React, { useState } from "react";

  const [isInCart, setIsInCart] = useState(false)

  function handleRemoveFromCart() {
    setIsInCart((isInCart) => !isInCart)
  }

  const inCart = isInCart ? "in-cart" : "" 
  const addToCart = isInCart ? "Remove From" : "Add To"
  const colour = addToCart ? "yellow" : "grey"

function Item({ name, category }) {
  return (
    <li className={inCart}>      
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} style={{background: colour}} onClick={handleRemoveFromCart}>{addToCart} Cart</button>    
    </li>
  );
}

export default Item;
