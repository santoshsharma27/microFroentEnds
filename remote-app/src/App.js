import React from "react";
import CardDetails from "./components/CardDetails.js";
import CardShort from "./components/CardShort.js";

const App = () => {
  const cardDetails = {
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    name: "Classic Margherita Pizza",
    cuisine: "Italian",
    rating: 4.5,
  };

  const cardShortDetails = {
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    name: "Classic Margherita Pizza",
  };

  return (
    <>
      <CardDetails data={cardDetails} />
      <CardShort data={cardShortDetails} />
    </>
  );
};

export default App;
