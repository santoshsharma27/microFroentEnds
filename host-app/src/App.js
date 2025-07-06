import React, { useState } from "react";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ProductList from "./components/ProductList";
import FoodListWrapper from "./components/FoodListWrapper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const callbackParent = (newItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const router = createBrowserRouter([
    {
      element: <Layout cart={cartItems} />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <FoodListWrapper callback={callbackParent} />,
        },
        {
          path: "/demo",
          element: <Demo />,
        },
        {
          path: "/to-do-app",
          element: <ProductList cart={cartItems} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
