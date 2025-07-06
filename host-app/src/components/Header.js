import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ cart }) => {
  const [showCart, setShowCart] = useState(false);

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
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/to-do-app"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            To Do List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/demo"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Demo
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
