import React, { useEffect } from "react";
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
import TopButtons from "./topButtons";

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

  const dispatch = useDispatch(); // used to dispatch an action

  const { leadsData, isLoading, successMsg, errorMsg } = useSelector(
    ({ leadsDataService }) => leadsDataService
  );
  
  useEffect(() => {
    dispatch(getLeadsData()); //Invoke Action
  }, []);

  return (
    <div>
     <div className="col-md-12 p-0">
          <TopButtons />
        </div>
    <MaterialTable 
    icons={tableIcons}
      title="Leads Data"
      columns={[
        { title: 'CUSTOMER NAME', field: 'name' },
        { title: 'PRODUCT TYPE', field: 'producttype' },
        { title: 'LOAN AMOUNT', field: 'loanamount', type: 'numeric' },
        { title: 'LOAN STATUS', field: 'loanstatus' },
        { title: 'REDEEM STATUS', field: 'redeemstatus' },
        { title: 'APPLICATION NUMBER', field: 'applicationnumber', type: 'numeric' },
        { title: 'APPLICATION DATE', field: 'applicationdate' },        
      ]}
      data={[
        { name: 'EMANDI VIJAYALAXMI', producttype: 'Personal Loan', loanamount: 650000, loanstatus: 'Applied',  redeemstatus: 'Pending', applicationnumber: '76443618(S)', applicationdate: '23-03-2021 04:00 PM'},
        { name: 'NERUGATTI CHARAN KUMAR', producttype: 'Personal Loan', loanamount: 1500000, loanstatus: 'Rejected',  redeemstatus: 'Redeemed', applicationnumber: 'IC76501384(S)', applicationdate: '20-03-2021 04:00 PM'},  
      ]}      
      options={{
        actionsColumnIndex: -1, search: false
      }}
    />
    </div>
  )
}

export default Leads;
