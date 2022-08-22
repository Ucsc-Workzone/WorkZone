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
import Avatar from '@mui/material/Avatar';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import { styled } from '@mui/material/styles';
import './styles/table.css';




const columns = [
  { id: 'no', 
    label: 'No.',
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'pic', 
    label: '',
    align: 'center',
    format: (value) => value.toString('en-US'),
  },
  { id: 'name', 
    label: 'Name',
    align: 'left',
    fontsize: "15px",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {    
    id: 'age', 
    label: 'Age', 
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  
  },
  {
    id: 'gender',
    label: 'Gender',
    // minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Mobile',
    // minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email',
    // minWidth: 170,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(0),
  },
    
];


function createData( no, pic, name, age, phone, gender, email, action) {
  return { no, pic, name, age, phone, gender, email, action };
}

const rows = [
  createData('1', 'member2.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', 1),
  createData('2', 'member3.jpg', 'Bimsara Kulasekara', '27', '776712245', 'Male', 'bimsarakulasekara19@gmail.com', 2  ),
  createData('3', 'member1.jpg', 'Malithi Perera', '27', '776712245', 'Female', 'malithiperera1998@gmail.com', 3  ),
  createData('4', 'member4.jpg', 'Kavindu Gunawardana', '27', '776712245', 'Male', 'kavindugunawaradana1997@gmail.com', 4  ),
  createData('5', 'member6.jpg', 'Hiruni Guruge', '27', '776712245', 'Female', 'hiruniguruge99@gmail.com', 5  ),
  createData('6', 'member5.jpg', 'Dulani Weerasinghe', '27', '776712245', 'Male', 'dulanajanaweerasinghe98@gmail.com', 6  ),
  createData('7', 'member7.jpg', 'Chathuri Amaraweera', '27', '776712245', 'Male', 'chamaraamraweera9@gmail.com', 7  ),
  // createData('8', 'member8.jpg', 'Pramaodya Gamage', '27', '776712245', 'Female', 'prmogamage19@gmail.com', 8  ),
  // createData('9', 'member9.jpg', 'Dhanika Herath', '27', '776712245', 'Male', 'dhanikaherath19@gmail.com', 9  ),
  // createData('10', 'member10.jpg', 'Nadun Sathsara', '27', '776712245', 'Male', 'nadunsathsara19@gmail.com', 10  ),
  // createData('11', 'member11.jpg', 'Nipun Gunawardana', '27', '776712245', 'Male', 'nipungunawardana19@gmail.com', 11  ),
  // createData('12', 'member12.jpg', 'Thilini Perera', '27', '776712245', 'Female', 'thiliniperera@gmail.com', 12  ),
  // createData('13', 'member13.jpg', 'Dasun perera', '27', '776712245', 'Male', 'dasunperera@gmail.com', 13  ),
  // createData('14', 'member14.jpg', 'Vikum Pushpakumaea', '27', '776712245', 'Male', 'vikumpushpakumara@gmail.com', 14  ),
  // createData('15', 'member15.jpg', 'Danuka Withana', '27', '776712245', 'Male', 'danukawithna19@gmail.com', 15  ),
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

const StickyHeadTable = () => {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [gender, setgender] = React.useState(1);

  const handleChange = (event) => {
    setgender(event.target.value);
  };

  return (
    <React.Fragment>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <InputLabel id="select-gender" style={{color:'#0C518A',fontWeight:"bold",padding:"10px"}}>Gender</InputLabel>
        <Select
            labelId="select-gender"
            id="gender"
            value={gender}
            label="Gender"
            style={{marginLeft:"30px",marginBottom:"20px"}}
            onChange={handleChange}
        >
                <MenuItem value={1}>Both</MenuItem>
                <MenuItem value={2}>Male</MenuItem>
                <MenuItem value={3}>Female</MenuItem>
            </Select>

            <TextField
                id="search-bar"
                className="textmail"
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}
                label="Search by Email"
                variant="outlined"
                placeholder="Search..."
                size="small"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      
                      if(!column.format){
                        return ( 
                          <StyledTableCell key={column.id} align={column.align}>
                            {value}
                          </StyledTableCell>
                          
                        );
                      }else if (typeof value == 'number'){
                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                            <Button variant="contained">Profile</Button>
                          </StyledTableCell>
                        );
                      }else{
                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                              {/* <Avatar >B</Avatar> */}
                              <Avatar src={require(`../assets/images/Profile/${value}`)} >B</Avatar>
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

export default StickyHeadTable;