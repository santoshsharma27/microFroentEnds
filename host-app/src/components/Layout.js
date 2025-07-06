import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

function Layout({ cart }) {
  return (
    <div>
      <Header cart={cart} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
