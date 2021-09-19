import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { hslToRgb } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {
  return (
  <>
  <div>
    <span style={{fontWeight: '600', fontSize: 22}}> { props.amount}</span>
  </div>  
  <div style={{display: 'flex'}}>
    <div>
    <Typography component="p" variant="h4">
          {props.name}
      </Typography>
      </div>
      <div>

      </div>
  </div>
        {/* <Title>Recent Deposits</Title>
        <Typography component="p" variant="h4" style={{fontSize: 18}}>
          $3,024.00
      </Typography> */}
      {/* <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography> */}
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
      </div>
    </>
  );
}
