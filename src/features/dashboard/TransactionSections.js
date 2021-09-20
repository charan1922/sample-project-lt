import React, { useContext, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchTotalProjections } from "../../redux/reducers/TotalProjections";
import {
  ErrorSnackbar,
  SuccessSnackbar,
} from "../../components/CustomSnackBar";
import AppContext from "../../components/contextProvider/AppContextProvider/AppContext";

function TransactionSection() {
  const dispatch = useDispatch();

  const { freqValue, productType, connectorId } = useContext(AppContext);

  const { totalProjectionsData, isLoading, successMsg, errorMsg } = useSelector(
    ({ totalProjections }) => totalProjections
  );

  useEffect(() => {
    dispatch(fetchTotalProjections(connectorId, productType, freqValue)); //Invoke Action
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freqValue, productType, connectorId]);

  const {
    totalSubmittedLoans = 0,
    totalDisbursedLoans = 0,
    totalDisbursedAmount = 0,
    totalConnectorAmount = 0,
  } = totalProjectionsData;

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
          <div style={{ borderRadius: "100px", height: "4rem" }}>
            <Deposits name="Loans Submitted" amount={totalSubmittedLoans} />
          </div>
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
          <Deposits name="Loans Processed" amount={totalDisbursedLoans} />
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
          <Deposits
            name="Amount Disbursed"
            amount={totalDisbursedAmount}
            type="currency"
          />
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
          <Deposits
            name="Amount Redemeed"
            amount={totalConnectorAmount}
            type="currency"
          />
        </Paper>
      </Grid>
      {errorMsg && <ErrorSnackbar errorMsg={errorMsg} />}
      {successMsg && <SuccessSnackbar successMsg={successMsg} />}
    </>
  );
}

export default TransactionSection;
