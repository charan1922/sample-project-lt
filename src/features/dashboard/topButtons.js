import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const TopButtons = (props) => {

    return (
        <div style={{ display: 'flex' }}>
            <button style={{ borderRadius: '30px', height: '50px', fontFamily: 'sans-serif', fontSize: 16, marginLeft: '25px' }}>Last 3 Months</button>
            <button style={{ borderRadius: '30px', height: '50px', fontFamily: 'sans-serif', fontSize: 16, marginLeft: '10px' }}>Last 6 Months</button>
            <button style={{ borderRadius: '30px', height: '50px', fontFamily: 'sans-serif', fontSize: 16, marginLeft: '10px' }}>Year to Date</button>
            <button style={{ borderRadius: '30px', height: '50px', fontFamily: 'sans-serif', fontSize: 16, width: '70px', marginLeft: '10px' }}>LTD</button>
            <FormControl sx={{ m: 1, minWidth: 150 }} style={{ alignContent: 'right', marginTop: '-1.5px', marginLeft: '35rem' }}>
                <Select
                    value={1}
                    // onChange={handleChange}
                    defaultValue="All Products"
                    style={{ borderRadius: '30px', height: '50px' }}
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
    )
}

export default React.memo(TopButtons);