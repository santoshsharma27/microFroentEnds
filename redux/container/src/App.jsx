import React from "react";
import FoodList from "./components/FoodList.jsx";
import Layout from "./components/Layout.jsx";
import "./style.css";

const App = () => {
  return (
    <Layout>
      <FoodList />
    </Layout>
  );
};

export default App;
