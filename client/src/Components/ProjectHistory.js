import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Chip from '@mui/material/Chip';

import { Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './styles/table.css';




const columns = [
  { id: 'no', 
    label: 'No.',
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'name', 
    label: 'Name',
    align: 'left',
    fontsize: "15px",
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'stdate',
    label: 'Started',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'eddate',
    label: 'Completed',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    // minWidth: 170,
    align: 'left',
    format: (value) => value.toFixed(0),
  },
    
];

function createData( no, name, stdate, eddate, action) {
  var stdate = stdate.substr(0,10);
  var eddate = eddate.substr(0,10);

return { no, name, stdate, eddate, action };
}

// const rows = [
//   createData('1', 'AQ Management System','20/03/2022', '20/08/2022', 1.1 ),
//   createData('2', 'Cemizen App','18/02/2022', '18/07/2022', 2.1  ),
//   createData('3', 'Bit Webpage','21/01/2022', '05/07/2022', 3.1  ),
//   createData('4', 'Fit Social App','17/12/2021', '18/05/2022', 4.1  ),
//   createData('5', 'SW Work tracking System','16/11/2021', '16/03/2022', 5.1  ),
//   createData('6', '199 Mobile App','30/10/2021', '20/02/2022', 6.1  ),
//   // createData('7', 'Chamara Amaraweera','15/08/2022', '3', 2, 7.1  ),
//   // createData('8', 'Pramaodya Gamage','15/08/2022', '5', 2, 8.1  ),
//   // createData('9', 'Dhanika Herath','12/08/2022', '1', 1, 9.1 ),
//   // createData('10', 'Nadun Sathsara','11/08/2022', '1', 1, 10.1  ),
//   // createData('11', 'Nipun Gunawardana','11/08/2022', '2', 1, 11.1  ),
//   // createData('12', 'Thilini Perera','10/08/2022', '3', 1, 12.1 ),
//   // createData('13', 'Dasun perera','10/08/2022', '4', 1, 13.1 ),
//   // createData('14', 'Vikum Pushpakumaea','09/08/2022', '2', 2, 14.1  ),
//   // createData('15', 'Danuka Withana','09/08/2022', '2', 2, 15.1  ),
// ]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0C518A',
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

const ProjectHistoryTable = () => {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [pend, setstatus] = React.useState(1);

  const handleChange = (event) => {
    setstatus(event.target.value);
  };

  const [picdate, setValue] = React.useState(new Date('2022-08-24T21:11:54'));

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };


  
  const [pendingData,setpendingdata]=useState([]);
  const [active,setactive]=useState(false);
  const [control,setcontrol]=useState(false);
  const [ptype,setptype]=useState(true);
  const [rows,setrows]=useState([]);

  const handleHistory = (newValue) => {
    setpendingdata(newValue);
    structure(newValue);
    setactive(true);
  };


  useEffect(()=>{
      getProjectData();
  },[])


  const getProjectData=()=>{
      axios
      .post('http://localhost:5000/api/coordinator/getProjectHis', {
          center_id: 1
      })
      .then((response) => {
          console.log(response.data);
          handleHistory(response.data);
          //setpendingdata(response.data);
        
      });
  }


  function structure(pendingData){
    if(pendingData){
      const i = pendingData.length;
   
      for(var j= 0 ; j < i ; j++){
        var n= j+1;
        var c = n.toString();
        
        var name = pendingData[j].projectName;
        var fdate = pendingData[j].startDate;
        var tod = pendingData[j].date;
        var des = pendingData[j].description;
        var act = pendingData[j].projectId;
  
        rows[j] = createData( c, name, fdate, tod , act);
      }
  
      console.log(rows);
      setrows(rows);

    }
  
  }

  return (
    <React.Fragment>
    <Paper sx={{ width: '100%', overflow: 'hidden', padding:'20px', marginTop:'20px'}}>
        <Typography variant="h3" component="h4" className="">
            Project History       
        </Typography>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={picdate}
                style={{marginLeft:"30px",marginBottom:"20px"}}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> */}
            {/* <TextField
                id="search-bar"
                className="textname"
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}
                label="Search by Name"
                variant="outlined"
                placeholder="Search..."
                size="small"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: "blue" ,marginLeft:"30px",marginBottom:"20px"}} />
                </IconButton> */}
      <TableContainer sx={{ maxHeight: 600 }} >
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow className="tablehead" >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor:'#0C518A' ,color:'white'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="tablehead" ></TableRow>
          </TableHead>
          <TableBody sx={{fontSize:'16px'}}>
            
            {active && rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                console.log(row['action']);
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}  >
                    {columns.map((column) => {
                      const value = row[column.id];
                     
                      if(!column.format){
                        if(value == 1){
                          return (
                            <StyledTableCell align={column.align}><Chip label="Accepted" color="success" style={{width:"90px"}} /></StyledTableCell>
                          );
                        }else if(value == 2){
                          return (
                          <StyledTableCell align={column.align}><Chip label="Rejected" color="error"  /></StyledTableCell>
                          );}
                      }else if (typeof value === 'number'){
                       
                        return (
                          <StyledTableCell><Button variant="contained" >Details</Button></StyledTableCell>
                        );
                      }else{
                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                            {value}
                          </StyledTableCell>
                        );
                      }
                    })}

    
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>

 
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{backgroundColor:"lightblue"}}
      />
    </Paper>
    </React.Fragment>
  );
}

export default ProjectHistoryTable;