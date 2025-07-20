import React, { useState } from "react";
import { useStore } from "container/store";
import { useSelector } from "react-redux";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const clickHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <span className="cart" onClick={clickHandler}>
        🛒 ({cart.length})
      </span>

      {showCart && (
        <ul className="cart-items">
          {cart.map((cartItem) => {
            return (
              <li key={cartItem.id}>
                {cartItem.name} ({cartItem.quantity})
              </li>
            );
          })}
        </ul>
      )}

      <div className="header">Microfrontend Host Application</div>
    </>
  );
};

export default Header;
