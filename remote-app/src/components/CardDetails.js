import React from "react";
import "./CardDetails.css";

const CardDetails = ({ data }) => {
  const { image, name, cuisine, rating } = data;

  return (
    <div className="card-details">
      <img src={image} alt={name} />
      <div className="price">Items at 200 Rs.</div>
      <div className="item-title">{name}</div>
      <div>Cuisine: {cuisine}</div>
      <div>Ratings: {rating}</div>
    </div>
  );
};

export default CardDetails;
