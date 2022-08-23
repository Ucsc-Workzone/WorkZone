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
<<<<<<< HEAD
  createData('Malithi Perera', '27/08/2022'),
  createData('Malithi Perera', '27/08/2022'),
  createData('Malithi Perera', '27/08/2022')
=======
  createData('member1.jpg', 'Malithi Perera', '27/08/2022'),
  createData('member2.jpg', 'Bimsara Kulasekara', '27/08/2022'),
  createData('member6.jpg', 'Hiruni Guruge', '27/08/2022')
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
];

import './styles/pendinglist.css';
import { Typography } from '@mui/material';


const LeavePendingList = ({flag}) => {
    return ( 
    
        <div className="pending-list">
<<<<<<< HEAD
            <box style={{display: 'flex', justifyContent: 'right'}}>
                <Button variant="contained"><Typography className="seeall" >All Requests</Typography></Button>
            </box>
=======
            
            <Box style={{display: 'flex', justifyContent: 'right'}}>
            {flag  &&
                <Button variant="contained"><Typography className="seeall" >All Requests</Typography></Button>
            }

                
            </Box>
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
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
                        {!(flag)  &&
                            <Button variant="contained" className="process"><Typography >Process</Typography></Button>
                        }
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
     );
}
 
export default LeavePendingList;