import React, { useContext } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AppContextProvider from '../../components/contextProvider/AppContextProvider/AppContext';
import { appconstants } from "../../constants/appconstants";


const TopButtons = (props) => {
    const {freqValue, changeFreqValue} = useContext(AppContextProvider);

    const UpdateActiveButton= (freq) => {
        changeFreqValue(freq);
    }

    return (
        <div className="col-md-12">
            <div className="row tabs-section w-100">
                <div className="col-md-8">
                    <button className={freqValue == appconstants.MTD ? "buttons-tabs button-active":"buttons-tabs"} onClick={(e)=> UpdateActiveButton(e.target.value)} value={appconstants.MTD}>Current Month</button>
                    <button className={freqValue == appconstants.QTD ? "buttons-tabs button-active":"buttons-tabs"} onClick={(e)=> UpdateActiveButton(e.target.value)} value={appconstants.QTD}>Last 3 Months</button>
                    <button className={freqValue == appconstants.HTD ? "buttons-tabs button-active":"buttons-tabs"} onClick={(e)=> UpdateActiveButton(e.target.value)} value={appconstants.HTD}>Last 6 Months</button>
                    <button className={freqValue == appconstants.YTD ? "buttons-tabs button-active":"buttons-tabs"} onClick={(e)=> UpdateActiveButton(e.target.value)} value={appconstants.YTD}>Year to Date</button>
                    <button className={freqValue == appconstants.LTD ? "buttons-tabs button-active":"buttons-tabs"} onClick={(e)=> UpdateActiveButton(e.target.value)} value={appconstants.LTD}>LTD</button>
                </div>
                <div className="col-md-4">
                    <FormControl sx={{ m: 1, minWidth: 150 }} style={{ float: 'right'}} className="dropdown-products">
                        <Select
                            value={1}
                            // onChange={handleChange}
                            defaultValue="All Products"
                            
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={1}>
                                All Products
                    </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>




        </div>
    )
}

export default React.memo(TopButtons);