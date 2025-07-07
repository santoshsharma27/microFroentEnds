import React, { useState } from "react";
import { useParentContext } from "host/parentContext";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useParentContext();

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
