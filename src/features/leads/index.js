import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

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
  return (
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
  )
}

export default Leads;
