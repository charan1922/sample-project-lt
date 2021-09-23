import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LoginIcon from "@mui/icons-material/Login";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { useLocation } from "react-router-dom";

const active = {
  background: "white",
  borderRadius: "5px",
  borderRight: 6,
  borderColor: "#40c4ff",
};
const nonActive = { borderRadius: "5px", color: "white" };

const MainListItems = () => {
  let location = useLocation();
  const { pathname } = location;
  // console.log(pathname, ":pathname");
  return (
    <List>
      <ListItem>
        <ListItemButton
          sx={
            pathname === "/dashboard" || pathname === "/" ? active : nonActive
          }
        >
          <ListItemIcon
            sx={
              pathname === "/dashboard" || pathname === "/"
                ? {}
                : { color: "white" }
            }
          >
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton sx={pathname === "/leads" ? active : nonActive}>
          <ListItemIcon sx={pathname === "/leads" ? {} : { color: "white" }}>
            <PersonOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Leads" />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton sx={pathname === "/loan-enquiry" ? active : nonActive}>
          <ListItemIcon
            sx={pathname === "/loan-enquiry" ? {} : { color: "white" }}
          >
            <FactCheckOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Loan Enquiry" />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton sx={pathname === "/settings" ? active : nonActive}>
          <ListItemIcon sx={pathname === "/settings" ? {} : { color: "white" }}>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default MainListItems;
