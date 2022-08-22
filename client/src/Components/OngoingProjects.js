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

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import DoughtChart from 'Components/DoughtChart';
import { useState } from "react";

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

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';

import Chip from '@mui/material/Chip';

import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import './styles/table.css';

import UpcomingList from './UpcomingsList';




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

const projects ={
    id:1,
    name:"Mobile App",
    pending:"4 Days",
    date:"27/03/2022"
  }
function createData( no, name, date, duration, status, action) {
  return { no, name, date, duration, status, action };
}

const rows = [
  createData('1', 'Pamodha Mahagamage','20/08/2022', '3', 1, 1.1 ),
  createData('2', 'Bimsara Kulasekara','20/08/2022', '2', 2, 2.1  ),
  createData('3', 'Malithi Perera','18/08/2022', '1', 1, 3.1  ),
  createData('4', 'Kavindu Gunawardana','17/08/2022', '1', 1, 4.1  ),
  createData('5', 'Hiruni Guruge','16/08/2022', '2', 1, 5.1  ),
  createData('6', 'Dulanjana Weerasinghe','15/08/2022', '2', 2, 6.1  ),
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

const LeaveHistoryTable = ({flag}) => {
  
const [userData, setUserData] = useState({
    // labels: ["CM", "NC"],
    datasets: [
        {
        label: "Users Gained",
        data: [85, 15],
        backgroundColor: [
            "#0f65fa",
            "#c2c6d1",
        ],
        borderColor: "white",
        borderWidth: 2,
        },
    ],
    });

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

  return (
    <React.Fragment>
    <Paper sx={{ width: '100%', overflow: 'hidden', padding:'20px', marginTop:'20px'}}>
        <Typography variant="h3" component="h4" className="">
            Ongoing Projects      
        </Typography>
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
                    <SearchIcon style={{ fill: "blue" ,marginLeft:"30px",marginBottom:"20px"}} />
                </IconButton>
                <Box style={{width:"100%", display:"flex", justifyContent:"right", align:"right", marginTop:"10px", marginBottom:"10px"}}>{flag && <Button variant="outlined">+ Create Project</Button>}</Box>
                <List sx={{padding:"10px",display:"block", justifyContent:'center', maxHeight:"500px", overflow:'auto',}}>
                      <ListItem sx={{ padding:"10px",display:"flex", justifyContent:'center' }}>
                        <Card variant="outlined" className="project-card">
                            <Box style={{display:"flex", width:'100%'}}>
                                <Box style={{display:"flex", justifyContent: 'left', width:'5%',backgroundColor:'#5e35b1'}}>
                          
                                </Box>
                                <Box style={{display:"flex", justifyContent: 'left', width:'70%', paddingLeft:'70px'}}>
                                  <Stack >
                                    <Typography variant="h3" component="p" fontSize="1.5vw" paddingTop={"15px"} paddingBottom={"15px"}>{projects.name}</Typography>
                                    <Typography variant="p" component="p" fontSize="0.8vw" paddingBottom={"6px"}>{projects.pending} Remaining</Typography>
                                    <Typography variant="h4" component="p"  fontSize="1.0vw" paddingBottom={"15px"}>Due Date:{projects.date}</Typography>
                                  </Stack>
                                </Box>
                                <Box style={{display:"flex", justifyContent: 'left', width:'60%', top: "50%"}}>
                                <div style={{ width: "38%"}}>
                                    <DoughtChart chartData={userData} percentage={"85"}/>
                                </div>             
                                </Box>
                            </Box>
                      </Card>
                      </ListItem>
                      <ListItem sx={{ padding:"10px",display:"flex", justifyContent:'center' }}>
                        <Card variant="outlined" className="project-card">
                            <Box style={{display:"flex", width:'100%'}}>
                                <Box style={{display:"flex", justifyContent: 'left', width:'5%',backgroundColor:'#5e35b1'}}>
                          
                                </Box>
                                <Box style={{display:"flex", justifyContent: 'left', width:'70%', paddingLeft:'70px'}}>
                                  <Stack >
                                    <Typography variant="h3" component="p" fontSize="1.5vw" paddingTop={"15px"} paddingBottom={"15px"}>{projects.name}</Typography>
                                    <Typography variant="p" component="p" fontSize="0.8vw" paddingBottom={"6px"}>{projects.pending} Remaining</Typography>
                                    <Typography variant="h4" component="p"  fontSize="1.0vw" paddingBottom={"15px"}>Due Date:{projects.date}</Typography>
                                  </Stack>
                                </Box>
                                <Box style={{display:"flex", justifyContent: 'left', width:'60%', top: "50%"}}>
                                <div style={{ width: "38%"}}>
                                    <DoughtChart chartData={userData} percentage={"85"}/>
                                </div>             
                                </Box>
                            </Box>
                      </Card>
                      </ListItem>
                      <ListItem sx={{ padding:"10px",display:"flex", justifyContent:'center' }}>
                        <Card variant="outlined" className="project-card">
                            <Box style={{display:"flex", width:'100%'}}>
                                <Box style={{display:"flex", justifyContent: 'left', width:'5%',backgroundColor:'#5e35b1'}}>
                          
                                </Box>
                                <Box style={{display:"flex", justifyContent: 'left', width:'70%', paddingLeft:'70px'}}>
                                  <Stack >
                                    <Typography variant="h3" component="p" fontSize="1.5vw" paddingTop={"15px"} paddingBottom={"15px"}>{projects.name}</Typography>
                                    <Typography variant="p" component="p" fontSize="0.8vw" paddingBottom={"6px"}>{projects.pending} Remaining</Typography>
                                    <Typography variant="h4" component="p"  fontSize="1.0vw" paddingBottom={"15px"}>Due Date:{projects.date}</Typography>
                                  </Stack>
                                </Box>
                                <Box style={{display:"flex", justifyContent: 'left', width:'60%', top: "50%"}}>
                                <div style={{ width: "38%"}}>
                                    <DoughtChart chartData={userData} percentage={"85"}/>
                                </div>             
                                </Box>
                            </Box>
                      </Card>
                      </ListItem>
                      <ListItem sx={{ padding:"10px",display:"flex", justifyContent:'center' }}>
                        <Card variant="outlined" className="project-card">
                            <Box style={{display:"flex", width:'100%'}}>
                                <Box style={{display:"flex", justifyContent: 'left', width:'5%',backgroundColor:'#5e35b1'}}>
                          
                                </Box>
                                <Box style={{display:"flex", justifyContent: 'left', width:'70%', paddingLeft:'70px'}}>
                                  <Stack >
                                    <Typography variant="h3" component="p" fontSize="1.5vw" paddingTop={"15px"} paddingBottom={"15px"}>{projects.name}</Typography>
                                    <Typography variant="p" component="p" fontSize="0.8vw" paddingBottom={"6px"}>{projects.pending} Remaining</Typography>
                                    <Typography variant="h4" component="p"  fontSize="1.0vw" paddingBottom={"15px"}>Due Date:{projects.date}</Typography>
                                  </Stack>
                                </Box>
                                <Box style={{display:"flex", justifyContent: 'left', width:'60%', top: "50%"}}>
                                <div style={{ width: "38%"}}>
                                    <DoughtChart chartData={userData} percentage={"85"}/>
                                </div>             
                                </Box>
                            </Box>
                      </Card>
                      </ListItem>
                  </List>
    </Paper>
    </React.Fragment>
  );
}

export default LeaveHistoryTable;