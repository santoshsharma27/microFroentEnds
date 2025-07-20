import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "container/store"; //  import Redux store from container

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
