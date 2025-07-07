import React from "react";
import { useParentContext } from "host/parentContext";
import "./CardDetails.css";

const CardDetails = ({ data }) => {
  const { image, name, cuisine, rating } = data;
  const [cart, setCart] = useParentContext();
  console.log(cart);

  const handleClick = (newItem) => {
    setCart((cart) => {
      const existingItem = cart?.find((item) => item.id === newItem.id);

      if (existingItem) {
        return cart?.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { ...newItem, quantity: 1 }];
      }
    });
  };

  return (
    <div className="card-details">
      <img src={image} alt={name} />
      <div className="price">Items at 200 Rs.</div>
      <div className="item-title">{name}</div>
      <div>Coisine: {cuisine}</div>
      <div>Ratings: {rating}</div>
      <button className="add-button" onClick={() => handleClick(data)}>
        Add
      </button>
    </div>
  );
};

export default CardDetails;
