import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(name, date) {
  return { name, date };
}

const rows = [
  createData('Malithi Perera', '27/08/2022'),
  createData('Malithi Perera', '27/08/2022'),
  createData('Malithi Perera', '27/08/2022')
];

import './styles/pendinglist.css';
import { Typography } from '@mui/material';


const LeavePendingList = () => {
    return ( 
    
        <div className="pending-list">
            <box style={{display: 'flex', justifyContent: 'right'}}>
                <Button variant="contained"><Typography className="seeall" >All Requests</Typography></Button>
            </box>
            <TableContainer component={Paper} style={{padding:'0px'}}>
                <Table sx={{ padding:"0px" }} aria-label="simple table" style={{textAlign:'right'}}>
                    <TableHead></TableHead>
                    <TableBody style={{textAlign:'left'}}>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="right"><Avatar className='small-avatar'>M</Avatar></TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
     );
}
 
export default LeavePendingList;