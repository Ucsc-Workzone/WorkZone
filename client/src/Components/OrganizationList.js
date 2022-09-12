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

import { useEffect } from 'react';

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
    align: 'Organization pic',
    format: (value) => value.toString('en-US'),
  },
  { id: 'name', 
    label: 'Organization Name',
    align: 'left',
    fontsize: "15px",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {    
    id: 'orgc', 
    label: 'Org Code', 
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  
  },
  {
    id: 'email',
    label: 'Organization Mail',
    // minWidth: 170,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Manage',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(0),
  },
    
];


function createData( no, pic, name, orgc, email, action) {
  return { no, pic, name, orgc, email, action };
}

const rows = [
  createData('1', 'org.png', 'UCSC E Learning Centre', '#3001', 'pamodhamahagamage19@gmail.com', 1),
  createData('2', 'org.png', 'UCSC NOC', '#3002', 'bimsarakulasekara19@gmail.com', 2  ),
  createData('3', 'org.png', 'Bit & Fit', '3003', 'malithiperera1998@gmail.com', 3  ),
  createData('4', 'org.png', 'AQ (Pvt) Ltd', '#3004', 'kavindugunawaradana1997@gmail.com', 4  ),
  createData('5', 'org.png', 'Asure DLP Systems', '#3005', 'hiruniguruge99@gmail.com', 5  ),
  createData('6', 'org.png', 'KPMG ', '#3006', 'dulanajanaweerasinghe98@gmail.com', 6  ),
  createData('7', 'org.png', 'Vision Workers', '#3007', 'chamaraamraweera9@gmail.com', 7  ),
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

const StickyHeadTable = (data) => {
console.log("Malithi",data)
  
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
    <Paper sx={{ width: '100%', overflow: 'hidden', padding:'40px' }}>
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

      <TableContainer sx={{ maxHeight: 700 , paddingTop:'40px'}} >
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
                            <Button variant="contained">Account</Button>
                          </StyledTableCell>
                        );
                      }else{
                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                              {/* <Avatar >B</Avatar> */}
                              <Avatar src={require(`../assets/images/Organization/${value}`)} >B</Avatar>
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