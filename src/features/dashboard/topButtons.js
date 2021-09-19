import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const TopButtons = (props) => {

    return (
        <div className="col-md-12">
            <div className="row tabs-section w-100">
                <div className="col-md-8">
                   <button className="buttons-tabs">Current Month</button>
                    <button className="buttons-tabs button-active">Last 3 Months</button>
                    <button className="buttons-tabs">Last 6 Months</button>
                    <button className="buttons-tabs">Year to Date</button>
                    <button className="buttons-tabs">LTD</button>
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