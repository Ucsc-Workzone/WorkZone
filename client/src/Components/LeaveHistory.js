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
import './styles/table.css';
import { useEffect } from 'react';

import axios from 'axios';
import { useState } from 'react';


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
  { id: 'date',
    label: 'Date',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'duration',
    label: 'Duration',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'status',
    label: 'Status',
    // minWidth: 170,
    align: 'center',
  },
  {
    id: 'action',
    label: 'Action',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(0),
  },
    
];


function createData( no, fname, lname, date, fromdate, todate, status, action) {
  const name = fname + " " +  lname;
  if(status == "Accepted"){
    status = 1
  }
  else if(status == "Rejected"){
    status = 2
  }
  else if(status == "Pending"){
    status = 3
  }

  var d1 = new Date(fromdate);   
  var d2 = new Date(todate);   
      
  var diff = d2.getTime() - d1.getTime();   
      
  var daydiff = diff / (1000 * 60 * 60 * 24);   

  const duration = daydiff.toString();



  return { no, name, date, duration, status, action };
}


const rows = [
  createData('1', 'Pamodha Mahagamage','20/08/2022', '3', 1, 1.1 ),
  createData('2', 'Bimsara Kulasekara','20/08/2022', '2', 2, 2.1  ),
  createData('3', 'Malithi Perera','18/08/2022', '1', 1, 3.1  ),
  createData('4', 'Kavindu Gunawardana','17/08/2022', '1', 1, 4.1  ),
  createData('5', 'Hiruni Guruge','16/08/2022', '2', 1, 5.1  ),
  createData('6', 'Dulanjana Weerasinghe','15/08/2022', '2', 2, 6.1  ),

]


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

const LeaveHistoryTable = () => {
  
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
  const [pendingData,setpendingdata]=useState([]);

  const handleDateChange = (newValue) => {
      setValue(newValue);
  };

  useEffect(()=>{
      getPendingData();
  },[])


  const getPendingData=()=>{
    axios
    .post('http://localhost:5000/api/coordinator/getLeavetableall', {
        center_id: 1
    })
    .then((response) => {
        console.log(response.data);
        setpendingdata(response.data);
    });
  }

  const rows = [
    createData('1', 'Pamodha', 'Mahagamage','20/08/2022', "2022-08-21T18:30:00.000Z", "2022-08-22T18:30:00.000Z", "Rejected", 1 ),
    // createData('2', 'Bimsara Kulasekara','20/08/2022', '2', 2, 2.1  ),
    // createData('3', 'Malithi Perera','18/08/2022', '1', 1, 3.1  ),
    // createData('4', 'Kavindu Gunawardana','17/08/2022', '1', 1, 4.1  ),
    // createData('5', 'Hiruni Guruge','16/08/2022', '2', 1, 5.1  ),
    // createData('6', 'Dulanjana Weerasinghe','15/08/2022', '2', 2, 6.1  ),
    // createData('7', 'Chamara Amaraweera','15/08/2022', '3', 2, 7.1  ),
    // createData('8', 'Pramaodya Gamage','15/08/2022', '5', 2, 8.1  ),
    // createData('9', 'Dhanika Herath','12/08/2022', '1', 1, 9.1 ),
    // createData('10', 'Nadun Sathsara','11/08/2022', '1', 1, 10.1  ),
    // createData('11', 'Nipun Gunawardana','11/08/2022', '2', 1, 11.1  ),
    // createData('12', 'Thilini Perera','10/08/2022', '3', 1, 12.1 ),
    // createData('13', 'Dasun perera','10/08/2022', '4', 1, 13.1 ),
    // createData('14', 'Vikum Pushpakumaea','09/08/2022', '2', 2, 14.1  ),
    // createData('15', 'Danuka Withana','09/08/2022', '2', 2, 15.1  ),
  ]

  return (
    <React.Fragment>
    <Paper sx={{ width: '100%', overflow: 'hidden', padding:'20px', marginTop:'20px'}}>
        <Typography variant="h3" component="h4" className="">
            Leave Requests   
        </Typography>
        <InputLabel id="select-gender" style={{color:'#0C518A',fontWeight:"bold",padding:"10px"}}>Status</InputLabel>
        <Select
            labelId="select-status"
            id="status"
            value={pend}
            label="Status"
            style={{marginLeft:"30px",marginBottom:"20px",color:"blacks"}}
            onChange={handleChange}
        >
                <MenuItem value={1}>All</MenuItem>
                <MenuItem value={2}>Accepted</MenuItem>
                <MenuItem value={3}>Rejected</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={picdate}
                style={{marginLeft:"30px",marginBottom:"20px"}}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <TextField
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
                    <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
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

           {/* {
             pendingData.map((row) => {
              return (
                createData(row[])
              )
            }) 
           }  */}
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
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
                        else if(value == 3){
                          return (
                          <StyledTableCell align={column.align}><Chip label="Pending" color="warning"  /></StyledTableCell>
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

export default LeaveHistoryTable;