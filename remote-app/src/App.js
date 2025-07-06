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

  const parentCallback = (result) => {
    console.log(result);
  };

  return (
    <>
      <CardDetails data={cardDetails} callback={parentCallback} />
      <CardShort data={cardShortDetails} />
    </>
  );
};

export default App;
