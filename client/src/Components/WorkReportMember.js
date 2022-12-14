import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {Typography} from '@mui/material';
import {useState,useEffect} from 'react';

import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
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
import { styled } from '@mui/material/styles';
import './styles/table.css';


const columns = [
  { id: 'no', 
    label: 'No.',
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  // { id: 'name', 
  //   label: 'Name',
  //   align: 'left',
  //   fontsize: "15px",
  //   format: (value) => value.toLocaleString('en-US'),
  // },
  {
    id: 'date',
    label: 'Date',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  // {
  //   id: 'period',
  //   label: 'Period',
  //   // minWidth: 170,
  //   align: 'center',
  //   format: (value) => value.toLocaleString('en-US'),
  // },
  {
    id: 'status',
    label: 'Status',
    // minWidth: 170,
    align: 'center',
  },
  // {
  //   id: 'action',
  //   label: 'Action',
  //   // minWidth: 170,
  //   align: 'center',
  //   format: (value) => value.toFixed(0),
  // },
    
];


function createData( no, date, status) { 
  var date = date.substr(0,10);

return { no, date, status };
}
// const rows = [
//   createData('1',  '28/08/2022', '1', 1, 1.1 ),
//   createData('2',  '28/08/2022', '2', 2, 2.1  ),
//   createData('2', '28/08/2022', '2', 2, 2.1  ),
  
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




const WorkReportMember = () => {
  
  const [pendingData,setpendingdata]=useState([]);
  const [active,setactive]=useState(false);
  const [rows,setrows]=useState([]);

  function structure(pendingData){
    if(pendingData){
      const i = pendingData.length;
   
      for(var j= 0 ; j < i ; j++){
        var n= j+1;
        var c = n.toString();
  
        var bdate = pendingData[j].startDate;
        var status = pendingData[j].status;
        // var act = pendingData[j].userid;
        
  
        rows[j] = createData( c, bdate, status);
      }
  
      console.log(rows);
      setrows(rows);
  
    }
  
  }
  
  const handlerecordlist = (newValue) => {
    setpendingdata(newValue);
    structure(newValue);
    setactive(true);
  };
  useEffect(()=>{
    getRecordData();
  },[])

  const getRecordData=()=>{
  // useEffect(()=>{
    const userid=localStorage.getItem('userid')
    axios
        .post('http://localhost:5000/api/member/reportTableFetch', {
            userId: userid
        })
        .then((response) => {
            console.log("Hiiii",response.data);
            handlerecordlist(response.data);
           
        });
  // },[])

}
  
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

  const [dudays, setPeriod] = React.useState(1);

  const handleperiodChange = (newValue) => {
    setPeriod(newValue.target.value);
  };

  const [picdate, setValue] = React.useState(new Date('2022-08-24T21:11:54'));

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

 

  return (
    <React.Fragment>
    <Paper sx={{ width: '100%', overflow: 'hidden',padding:'20px' }}>
        <Typography variant="h3" component="h4" className="" style={{marginLeft:"10px",marginTop:"10px",marginBottom:"20px"}}>
                Work Record History       
        </Typography>
        <Box style={{display:"flex"}}>
          <Box style={{display:"block"}}>
            <InputLabel id="select-statusr" style={{color:'#0C518A',fontWeight:"bold",padding:"10px"}}>Status</InputLabel>
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
          </Box>
          {/* <Box style={{display:"block",marginLeft:"3%"}}>
          <InputLabel id="select-days" style={{color:'#0C518A',fontWeight:"bold",padding:"10px"}}>Days</InputLabel>
            <Select
                labelId="select-days"
                id="days"
                value={dudays}
                label="Period"
                style={{marginLeft:"30px",marginBottom:"20px",color:"blacks"}}
                onChange={handleperiodChange}
            >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
          </Box> */}
          {/* <Box style={{display:"block",marginLeft:"3%", marginTop:"40px"}}>
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
          </Box> */}
          {/* <Box style={{display:"block",marginLeft:"3%", marginTop:"40px"}}>
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
          </Box> */}

        </Box>
            
          
      <TableContainer sx={{ maxHeight: 600}} >
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

export default WorkReportMember;