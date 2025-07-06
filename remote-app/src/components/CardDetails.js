import React from "react";
import "./CardDetails.css";

const CardDetails = ({ data, callback }) => {
  const { image, name, cuisine, rating } = data;

  const handleClick = () => {
    callback(data);
  };

  return (
    <div className="card-details">
      <img src={image} alt={name} />
      <div className="price">Items at 200 Rs.</div>
      <div className="item-title">{name}</div>
      <div>Cuisine: {cuisine}</div>
      <div>Ratings: {rating}</div>
      <button className="add-button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default CardDetails;
