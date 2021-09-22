import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
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
  // customerName: yup.string().required(),
  // customerName: yup.string().required()
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

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


function Leads() {

  const classes = useStyles();

  const dispatch = useDispatch(); // used to dispatch an action

  const { leadsData, isLoading, successMsg, errorMsg } = useSelector(
    ({ leadsDataService }) => leadsDataService
  );

  const states = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]


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
                {states.map((x) => <MenuItem value={x}>{x}</MenuItem>)}
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
        <Button onClick={handleClose} >Cancel</Button>
        <Button  type="submit" onClick={addAPI}>Add Lead</Button>
      
      </DialogActions>
    </form>
  </Dialog>

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
      </div>
   
     
      <div>
      <MaterialTable
        icons={tableIcons}
        title="Leads Data"
        columns={[
          { title: 'Customer Name', field: 'customerName' },
          { title: 'Bank', field: 'loanBank' },
          { title: 'Product Type', field: 'productType' },
          { title: 'Application Status', field: 'loanStatus' },
          { title: 'Disbursement Date', field: 'disbursementDate' },
          { title: 'Disbursement Amount', field: 'disbursementAmount', type: 'numeric' },
          { title: 'Customer Number', field: 'customerPhone', type: 'numeric' },
          { title: 'Location', field: 'location' },
          { title: 'State', field: 'loanState' },
          { title: 'Application Number', field: 'applicationNumber' },
          { title: 'Pay Out Type', field: 'payOutType', type: 'numeric' },
          { title: 'Connector Payout Amount', field: 'connectorPayoutAmount' },
          { title: 'APPLICATION DATE', field: 'applicationdate' },
        ]}
        data={[
          { addLead },
          { name: 'NERUGATTI CHARAN KUMAR', producttype: 'Personal Loan', loanamount: 1500000, loanstatus: 'Rejected', redeemstatus: 'Redeemed', applicationnumber: 'IC76501384(S)', applicationdate: '20-03-2021 04:00 PM' },
        ]}
        actions={[
          {
            icon: SaveIcon,
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)

          },
          rowData => ({
            icon: DeleteIcon,
            tooltip: 'Delete User',
            onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000
          })
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
      {addLeadElement}
      </div>
     
    </div>
  )
}

export default Leads;
