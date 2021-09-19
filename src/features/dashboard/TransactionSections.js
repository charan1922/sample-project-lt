import * as React from "react";
import { styled, createTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
// import Chart from './Chart';
import Deposits from "./Deposits";
import Orders from "./Orders";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 100;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    borderRadius: "10px",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      borderRadius: "10px",
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      borderRadius: "10px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function TransactionSection() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
    
    <Grid item xs={12} md={3} lg={3} className="col-md-3 deposits-card">
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 100,
          }}
        >
          <div style={{borderRadius: '100px', height: '4rem'}}><Deposits name="Loans Submitted" amount={500}/></div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3} className="col-md-3 deposits-card">
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 100,
          }}
        >
          <Deposits name="Loans Processed" amount="800" />
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3} className="col-md-3 deposits-card">
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 100,
          }}
        >
          <Deposits name="Amount Disbursed" amount="₹ 8,34,50,000" />
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3} className="col-md-3 deposits-card">
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 100,
          }}
        >
          <Deposits name="Amount Redemeed" amount="₹ 53,999" />
        </Paper>
      </Grid>
    

    </>
  );
}

export default TransactionSection;
