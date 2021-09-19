import React, { useState } from "react";
import AppContext from "./AppContext";
import defaultContext from "./defaultContext";

const AppContextProvider = ({ children }) => {
  const [open, setOpen] = useState(defaultContext.isDrawerOpen); // true

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppContext.Provider
      value={{
        open,
        toggleDrawer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
