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

import { styled } from '@mui/material/styles';
import './styles/table.css';




const columns = [
//   { id: 'no', 
//     label: 'No.',
//     align: 'center'
//   },
  { id: 'pic', 
  label: '',
  align: 'center',
  format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'name',
    label: 'Name',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
//   {
//     id: 'date',
//     label: 'Date',
//     // minWidth: 170,
//     align: 'center',
//     format: (value) => value.toLocaleString('en-US'),
//   },
  {
    id: 'duration',
    label: 'Duration',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'action',
    label: '',
    // minWidth: 170,
    align: 'center',
    renderCell: () => (
        <Button variant="outlined">Profile</Button>
      ),
  },
    
];


function createData( pic, name, duration, id) {
  return { pic, name, duration, id };
}

const rows = [
  createData('mem1', 'Pamodha Mahagamage', '1' ),
  createData('mem1', 'BImsara Kulasekara', '2'  ),
  createData('mem1', 'Malithi Perera', '2'  ),
  createData('mem1', 'Kavindu Samarasinghe', '2'  ),
  createData('mem1', 'Hiruni Guruge', '2'  ),
  createData('mem1', 'Dulanajana Liyanage', '3'  ),
//   createData(7, 'member1.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData(8, 'member1.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData(9, 'member1.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData(10, 'member1.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData(11, 'member1.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData(12, 'member1.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData(13, 'member1.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData(14, 'member1.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData(15, 'member1.jpg', 'Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
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

const PendingLeaveTable = () => {
  
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
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
                      );
                    })}
                        <StyledTableCell><Button variant="contained">View</Button></StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{backgroundColor:"lightblue"}}
      /> */}
    </Paper>
    </React.Fragment>
  );
}

export default PendingLeaveTable;