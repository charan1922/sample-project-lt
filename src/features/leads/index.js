import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { forwardRef } from 'react';
import AddBox from '@mui/icons-material/AddBox';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Check from '@mui/icons-material/Check';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Clear from '@mui/icons-material/Clear';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Edit from '@mui/icons-material/Edit';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import Remove from '@mui/icons-material/Remove';
import SaveAlt from '@mui/icons-material/SaveAlt';
import Search from '@mui/icons-material/Search';
import ViewColumn from '@mui/icons-material/ViewColumn';
import { getLeadsData } from "../../redux/reducers/LeadsDataService";
import Button from '@mui/material/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

import * as yup from "yup";

const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
  );

const validationSchema = yup.object({
  customerName: yup.string().required(),
  productType: yup.string().required(),
  customerPhone: yup.number().test('len', 'Please enter valid mobile number', (val) => val.toString().length == 10).required(),
  loanBank: yup.string().required(),
  loanAmount: yup.number().positive().integer().required(),
  leadManager: yup.string().required(),
  location: yup.string().required(),
  loanState: yup.string().required(),
  applicationNumber: yup.string().required(),
  payOutType: yup.string().required(),
});

const useStyles = makeStyles(theme => ({
  tableCell: { textAlign: 'center' },
  select: {
    width: '200px',
    margin: '5px'
  },
  // textField: {
  //   marginLeft: '30px'
  // },
  formControl: {
    padding: '5px',
    width: '250px'
  },
 
}));

function loadServerRows(page, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.rows.slice(page * 5, (page + 1) * 5));
    }, Math.random() * 500 + 100); // simulate network latency
  });
}


function Leads() {

  const classes = useStyles();

  const dispatch = useDispatch(); // used to dispatch an action


  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  React.useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      const newRows = await loadServerRows(page, data);

      if (!active) {
        return;
      }

      setRows(newRows);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page, data]);

  const { leadsData, isLoading, successMsg, errorMsg } = useSelector(
    ({ leadsDataService }) => leadsDataService
  );

  const states = {
    "AN":"Andaman and Nicobar Islands",
    "AP":"Andhra Pradesh",
    "AR":"Arunachal Pradesh",
    "AS":"Assam",
    "BR":"Bihar",
    "CG":"Chandigarh",
    "CH":"Chhattisgarh",
    "DN":"Dadra and Nagar Haveli",
    "DD":"Daman and Diu",
    "DL":"Delhi",
    "GA":"Goa",
    "GJ":"Gujarat",
    "HR":"Haryana",
    "HP":"Himachal Pradesh",
    "JK":"Jammu and Kashmir",
    "JH":"Jharkhand",
    "KA":"Karnataka",
    "KL":"Kerala",
    "LA":"Ladakh",
    "LD":"Lakshadweep",
    "MP":"Madhya Pradesh",
    "MH":"Maharashtra",
    "MN":"Manipur",
    "ML":"Meghalaya",
    "MZ":"Mizoram",
    "NL":"Nagaland",
    "OR":"Odisha",
    "PY":"Puducherry",
    "PB":"Punjab",
    "RJ":"Rajasthan",
    "SK":"Sikkim",
    "TN":"Tamil Nadu",
    "TS":"Telangana",
    "TR":"Tripura",
    "UP":"Uttar Pradesh",
    "UK":"Uttarakhand",
    "WB":"West Bengal"
}


  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, formState: { errors }, reset } = useForm({ resolver });


  const [addLead, setAddLead] = useState("");
  const [openLead, setOpenLead] = useState(false);

  const onSubmit = (data) => setAddLead(JSON.stringify(data));

  const handleAddLead = () => {
    console.log("vacham")
    setOpenLead(true)
  }

  const handleClose = () => {
    setOpenLead(false);
  };

  const addAPI = () => {
    console.log("eroor", errors)
    setOpenLead(false)
    console.log("aksmlm")
  }

  useEffect(() => {
    dispatch(getLeadsData()); //Invoke Action
  }, []);

  const addLeadElement = <Dialog open={openLead} onClose={handleClose}>
    <DialogTitle>Lead Entry Module - Connector</DialogTitle>
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent>
        <div className="row form-fields">
       
          <div className="col-md-6">
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                {...register("customerName")}
                label="Customer Name"
                fullWidth
                variant="standard"
              />
              <p style={{ color: 'red', fontSize: 9 }}>{errors.customerName?.message}</p>
            </FormControl>
          </div>
          <div className="col-md-6">
            <FormControl variant="standard" className={classes.formControl}>
              <InputLabel >Product Type</InputLabel>
              <Select
                className={classes.textField}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                sx={{ marginTop: '20px' }}
                {...register("productType")}
                label="Product Type"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <p style={{ color: 'red', fontSize: 9 }}>{errors.productType?.message}</p>
            </FormControl>
          </div>
          <div className="col-md-6">
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                className={classes.textField}
                autoFocus
                type='number'
                margin="dense"
                {...register("customerPhone")}
                label="Customer Mobile Number"
                fullWidth
                variant="standard"
              />
              <p style={{ color: 'red', fontSize: 9 }}>{errors.customerPhone?.message}</p>
            </FormControl>
          </div>
          <div className="col-md-6">
            <FormControl variant="standard" className={classes.formControl}>
              <InputLabel >Bank Name</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                sx={{ marginTop: '20px' }}
                {...register("loanBank")}
                label="Bank Name"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <p style={{ color: 'red', fontSize: 9 }}>{errors.loanBank?.message}</p>
            </FormControl>
          </div>
          <div className="col-md-6">
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                type="number"
                {...register("loanAmount")}
                label="Loan Amount"
                fullWidth
                variant="standard"
              />
              <p style={{ color: 'red', fontSize: 9 }}>{errors.loanAmount?.message}</p>
            </FormControl>
          </div>
          <div className="col-md-6">
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                {...register("leadManager")}
                
                label="Manager"
                fullWidth
                variant="standard"
              />
              <p style={{ color: 'red', fontSize: 9 }}>{errors.leadManager?.message}</p>
            </FormControl>
          </div>
          <div className="col-md-6">
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                {...register("location")}
                label="Location"
                fullWidth
                variant="standard"
              />
              <p style={{ color: 'red', fontSize: 9 }}>{errors.location?.message}</p>
            </FormControl>
          </div>
          <div className="col-md-6">
            <FormControl variant="standard" className={classes.formControl}>
              <InputLabel >State</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                sx={{ marginTop: '30px' }}
                {...register("loanState")}
                fullWidth
              >
                {Object.keys(states).map((x) => <MenuItem value={x}>{states[x]}</MenuItem>)}
              </Select>
              <p style={{ color: 'red', fontSize: 9 }}>{errors.loanState?.message}</p>
            </FormControl>
          </div>
          <div className="col-md-6">

            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                {...register("applicationNumber")}
                label="Application Number"

                variant="standard"
              />
              <p style={{ color: 'red', fontSize: 9 }}>{errors.applicationNumber?.message}</p>
            </FormControl>
          </div>
          <div className="col-md-6">
            <FormControl variant="standard" className={classes.formControl}>
              <InputLabel>Pay Out Type</InputLabel>
              <Select

                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                sx={{ marginTop: '20px' }}
                {...register("payOutType")}
                label="Pay Out Type"
                fullWidth
              >

                <MenuItem value='Not Processed'>Not Processed</MenuItem>
                <MenuItem value='Pending for Review'>Pending for Review</MenuItem>
                <MenuItem value='Pending for Payment'>Pending for Payment</MenuItem>
                <MenuItem value='Payment Processing'>Payment Processing</MenuItem>
              </Select>
              <p style={{ color: 'red', fontSize: 9 }}>{errors.payOutType?.message}</p>
            </FormControl>
          </div>
        </div>
        {/* <FormControl variant="standard" className={classes.formControl}>

      </FormControl> */}

      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose} >Cancel</Button>
        <Button variant="outlined" type="submit" onClick={addAPI}>Add</Button>
      
      </DialogActions>
    </form>
  </Dialog>

const columns=[
  { headerName: 'Customer Name', field: 'customerName', width: 150 },
  { headerName: 'Bank', field: 'loanBank' , width: 120},
  { headerName: 'Product Type', field: 'productType', width: 150 },
  { headerName: 'Application Status', field: 'loanStatus', width: 150 },
  { headerName: 'Disbursement Date', field: 'disbursementDate', width: 150 },
  { headerName: 'Disbursement Amount', field: 'disbursementAmount', type: 'numeric', width: 150 },
  { headerName: 'Customer Number', field: 'customerPhone', type: 'numeric', width: 150 },
  { headerName: 'Location', field: 'location', width: 150 },
  { headerName: 'State', field: 'loanState', width: 150 },
  { headerName: 'Application Number', field: 'applicationNumber', width: 150 },
  { headerName: 'Pay Out Type', field: 'payOutType', type: 'numeric', width: 150 },
  { headerName: 'Connector Payout Amount', field: 'connectorPayoutAmount', width: 150 },
  { headerName: 'APPLICATION DATE', field: 'applicationdate', width: 150 },
]

  return (
    <div className="sidenav-content">
      
      <div className="upload-lead-buttons">
      <Button variant="outlined" endIcon={<FileUploadOutlinedIcon />} className={classes.button}>
        Bulk Upload
      </Button>
      {addLead}

      <Button variant="outlined" startIcon={<AddOutlinedIcon />} onClick={handleAddLead} className={classes.button}>
        Add Lead
      </Button>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowCount={100}
        paginationMode="server"
        onPageChange={(newPage) => setPage(newPage)}
        loading={loading}
      />
    </div>
     

      {addLeadElement}
      </div>
     
    </div>
  )
}

export default Leads;
