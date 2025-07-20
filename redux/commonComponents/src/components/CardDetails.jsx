import React from "react";
import "./CardDetails.css";
import { useDispatch } from "react-redux";
import { setCart } from "container/cartSlice"; //  federated import

const CardDetails = ({ data }) => {
  const { image, name, cuisine, rating } = data;
  const dispatch = useDispatch();

  const handleClick = (newItem) => {
    console.log(newItem);
    dispatch(setCart(newItem));
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
