import * as React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import { render } from "react-dom";


export const mainListItems = (
    <List>
    <ListItem >
      <ListItemButton sx={{background:'white',borderRadius:'5px',}} >
      <ListItemIcon>
        <HomeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
      </ListItemButton>
    </ListItem>

    <ListItem >
      <ListItemButton sx={{borderRadius:'5px',color:'white'}}>
      <ListItemIcon sx={{color:'white'}}> 
        <PersonOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Leads" />
      </ListItemButton>
    </ListItem>

    <ListItem >
      <ListItemButton sx={{borderRadius:'5px',color:'white'}}>
      <ListItemIcon sx={{color:'white'}} > 
        <FactCheckOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Loan Enquiry" />
      </ListItemButton>
    </ListItem>

    <ListItem >
      <ListItemButton sx={{borderRadius:'5px',color:'white'}} >
      <ListItemIcon sx={{color:'white'}}>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
      </ListItemButton>
    </ListItem>
  </List>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
