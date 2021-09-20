import React, { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AppContextProvider from "../../components/contextProvider/AppContextProvider/AppContext";
import {
  timeIntervalConstants,
  productConstants,
} from "../../constants/appconstants";

const TopButtons = (props) => {
  const { LTD, YTD, HTD, QTD, MTD } = timeIntervalConstants;
  const { ALL, PERSONAL, AUTO, HOME, BUSINESS } = productConstants;

  const { freqValue, changeFreqValue, productType, changeProductType } =
    useContext(AppContextProvider);

  const UpdateActiveButton = (freq) => {
    changeFreqValue(freq);
  };

  const handleChange = (event) => {
    changeProductType(event.target.value);
  };

  return (
    <div className="col-md-12">
      <div className="row tabs-section w-100">
        <div className="col-md-8">
          <button
            className={
              freqValue === MTD ? "buttons-tabs button-active" : "buttons-tabs"
            }
            onClick={(e) => UpdateActiveButton(e.target.value)}
            value={MTD}
          >
            Current Month
          </button>
          <button
            className={
              freqValue === QTD ? "buttons-tabs button-active" : "buttons-tabs"
            }
            onClick={(e) => UpdateActiveButton(e.target.value)}
            value={QTD}
          >
            Last 3 Months
          </button>
          <button
            className={
              freqValue === HTD ? "buttons-tabs button-active" : "buttons-tabs"
            }
            onClick={(e) => UpdateActiveButton(e.target.value)}
            value={HTD}
          >
            Last 6 Months
          </button>
          <button
            className={
              freqValue === YTD ? "buttons-tabs button-active" : "buttons-tabs"
            }
            onClick={(e) => UpdateActiveButton(e.target.value)}
            value={YTD}
          >
            Year to Date
          </button>
          <button
            className={
              freqValue === LTD ? "buttons-tabs button-active" : "buttons-tabs"
            }
            onClick={(e) => UpdateActiveButton(e.target.value)}
            value={LTD}
          >
            LTD
          </button>
        </div>
        <div className="col-md-4">
          <FormControl
            sx={{ m: 1, minWidth: 150 }}
            style={{ float: "right" }}
            className="dropdown-products"
          >
            <Select
              value={productType}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={ALL}>All Products</MenuItem>
              <MenuItem value={PERSONAL}>Personal</MenuItem>
              <MenuItem value={AUTO}>Auto</MenuItem>
              <MenuItem value={HOME}>Home</MenuItem>
              <MenuItem value={BUSINESS}>Business</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TopButtons);
