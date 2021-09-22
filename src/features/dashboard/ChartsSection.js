import * as React from "react";
import { useContext } from "react";
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
import TransactionSection from "./TransactionSections";
import Chart2 from "./charts/chart2";
import Chart1 from "./charts/chart1";
import AppContextProvider from "../../components/contextProvider/AppContextProvider/AppContext";

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

const drawerWidth = 240;

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
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
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

function ChartsSection() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { freqValue } =
  useContext(AppContextProvider);

  const renderSwitch=(param)=>{
    switch(param){
      case 'MTD':
        return "Monthly";
      case 'LTD':
        return "LTD";
      case 'YTD':
        return "Yearly";
      case 'QTD':
      return "Quarterly";
      case 'HTD':
      return "Half Yearly";
    }
  }

  return (
    <>
      <Grid item xs={12} md={6} lg={6} >
     
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 400,
          }}
          className="chart-section"
        >
          <div> 
           <h6 style={{display:"inline-block"}} > {renderSwitch(freqValue)}</h6> <h6 style={{display:"inline-block"}}> Loan Submitted & Processed</h6>
          </div>
          
          <Chart1 />
        
          
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={6} lg={6} >
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 400,
          }}
          className="chart-section"
        >
          {/* <Deposits /> */}
          <h6>Loan Submitted & Processed By Product</h6>
          <Chart2 />
        </Paper>
      </Grid>
    </>
  );
}

export default ChartsSection;
