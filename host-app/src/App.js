import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FoodList from "./components/FoodList";
import ProductList from "./components/ProductList";
import "./style.css";

const App = () => (
  <div className="app-container">
    <Header />
    <main className="content">
      <FoodList />
      <ProductList />
    </main>
    <Footer />
  </div>
);

export default App;
