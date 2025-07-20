import React from "react";
import CardDetails from "./components/CardDetails.jsx";

const App = () => {
  const cardDetails = {
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    name: "Classic Margherita Pizza",
    cuisine: "Italian",
    rating: 4.5,
  };

  return <CardDetails data={cardDetails} />;
};

export default App;
