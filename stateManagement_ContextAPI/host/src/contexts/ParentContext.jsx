import React, { createContext, useContext, useState } from "react";

// Create context without default value
const ParentContext = createContext(null);

export const ParentProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <ParentContext.Provider value={[cart, setCart]}>
      {children}
    </ParentContext.Provider>
  );
};

export const useParentContext = () => {
  const context = useContext(ParentContext);
  if (context === null) {
    throw new Error("useParentContext must be used within a ParentProvider");
  }
  return context;
};
