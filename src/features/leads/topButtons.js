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
  const AddLeadForm = () => {    

  };  

  return (
    <div className="col-md-12">
      <div className="row tabs-section w-100">
        <div className="col-md-8">
          <button
            className="buttons-tabs"                 
          >
            Column
          </button>
          <button
            className="buttons-tabs"                   
          >
            Bulk Upload
          </button>
          <button
            className="buttons-tabs button-active"
            onClick={(e) => AddLeadForm()}           
          >
            Add Lead
          </button>          
        </div>       
      </div>
    </div>
  );
};

export default React.memo(TopButtons);
