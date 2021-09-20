import React, { useState } from "react";
import {
  timeIntervalConstants,
  productConstants,
} from "../../../constants/appconstants";
import AppContext from "./AppContext";
import defaultContext from "./defaultContext";

const AppContextProvider = ({ children }) => {
  const [open, setOpen] = useState(defaultContext.isDrawerOpen); // true
  const [freqValue, setFreqValue] = useState(timeIntervalConstants.MTD);
  const [productType, setProductType] = useState(productConstants.ALL);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const changeFreqValue = (value) => {
    setFreqValue(value);
  };
  const changeProductType = (value) => {
    setProductType(value);
  };

  return (
    <AppContext.Provider
      value={{
        open,
        toggleDrawer,
        freqValue,
        changeFreqValue,
        productType,
        changeProductType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
