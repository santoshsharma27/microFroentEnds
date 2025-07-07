import React from "react";
import FoodList from "./components/FoodList.jsx";
import Layout from "./components/Layout.jsx";
import { ParentProvider } from "host/parentContext";
import "./style.css";

const App = () => {
  return (
    <ParentProvider>
      <Layout>
        <FoodList />
      </Layout>
    </ParentProvider>
  );
};

export default App;
