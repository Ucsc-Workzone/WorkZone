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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import './styles/table.css';




const columns = [
//   { id: 'no', 
//     label: 'No.',
//     align: 'center'
//   },
//   { id: 'pic', 
//   label: '',
//   align: 'center',
//   format: (value) => value.toLocaleString('en-US'),
//   },
  { id: 'name', 
    label: 'Teams',
    align: 'center',
    fontsize: "15px",
    format: (value) => value.toLocaleString('en-US'),
  },
//   {    
//     id: 'age', 
//     label: 'Age', 
//     align: 'center',
//     format: (value) => value.toLocaleString('en-US'),
  
//   },
  
//   {
//     id: 'gender',
//     label: 'Gender',
//     // minWidth: 170,
//     align: 'center',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'phone',
//     label: 'Mobile',
//     // minWidth: 170,
//     align: 'center',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'email',
//     label: 'Email',
//     // minWidth: 170,
//     align: 'left',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'action',
//     label: '',
//     // minWidth: 170,
//     align: 'center',
//     renderCell: () => (
//         <Button variant="outlined">Profile</Button>
//       ),
//   },
    
];


function createData(name) {
  return { name};
}

const rows = [
  createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '1' ),
  createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
  createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
  createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
//   createData('Pamodha Mahagamage', '27', '776712245', 'Male', 'pamodhamahagamage19@gmail.com', '2'  ),
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
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const TeamList = () => {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TextField
                id="search-bar"
                className="textteam"
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}
                label="Search by Team"
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
          </TableHead>
          <TableBody sx={{fontSize:'16px'}}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}  >
                        <Card sx={{ minWidth: 40, margin:"10px" }}>
                            <CardContent styles={{ padding:"10px" }}>
                                <Typography variant="h4" component="div" fontWeight={600}>
                                     Mobile App Team
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{marginBottom:"0px"}}>
                                    5 Members
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' >Manage Team</Button>
                            </CardActions>
                        </Card>
                    {/* {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
                      );
                    })} */}
                        {/* <StyledTableCell><Button variant="contained">Profile</Button></StyledTableCell> */}
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

export default TeamList;