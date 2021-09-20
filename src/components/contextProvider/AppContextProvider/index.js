import React, { useState } from "react";
import { appconstants } from "../../../constants/appconstants";
import AppContext from "./AppContext";
import defaultContext from "./defaultContext";

const AppContextProvider = ({ children }) => {
  const [open, setOpen] = useState(defaultContext.isDrawerOpen); // true
  const [freqValue, setFreqValue] = useState(appconstants.MTD); 

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const changeFreqValue = (value) => {
    setFreqValue(value);
  };

  return (
    <AppContext.Provider
      value={{
        open,
        toggleDrawer,
        freqValue,
        changeFreqValue
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
