import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

const options = {
  autoHideDuration: 6000,
  vertical: "top",
  horizontal: "right",
};

export const ErrorSnackbar = ({ errorMsg }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (errorMsg) {
      setOpen(true);
    }
  }, [errorMsg]);
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: options.vertical,
        horizontal: options.horizontal,
      }}
      autoHideDuration={options.autoHideDuration}
      open={open}
      onClose={handleCloseError}
    >
      <Alert onClose={handleCloseError} severity="error">
        {errorMsg}
      </Alert>
    </Snackbar>
  );
};
export const SuccessSnackbar = ({ successMsg }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (successMsg) {
      setOpen(true);
    }
  }, [successMsg]);
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: options.vertical,
        horizontal: options.horizontal,
      }}
      autoHideDuration={options.autoHideDuration}
      open={open}
      onClose={handleCloseSuccess}
    >
      <Alert onClose={handleCloseSuccess} severity="success">
        {successMsg}
      </Alert>
    </Snackbar>
  );
};
