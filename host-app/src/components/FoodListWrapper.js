import React from "react";
import FoodList from "./FoodList";

const FoodListWrapper = ({ callback }) => {
  return <FoodList callback={callback} />;
};

export default FoodListWrapper;
