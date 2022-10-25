import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function createData(id, name, date) {
  return { id, name, date };
}

const rows = [
  createData('member1.jpg', 'Malithi Perera', '27/08/2022'),
  createData('member2.jpg', 'Bimsara Kulasekara', '27/08/2022'),
  createData('member6.jpg', 'Hiruni Guruge', '27/08/2022')
];

import './styles/pendinglist.css';
import { Typography } from '@mui/material';


const LeavePendingList = ({flag}) => {
    const navigate=useNavigate();
    const [countleavelist,setleavelist]=useState([]);
    useEffect(()=>{
getCount();
    },[]
    )

    const getCount=()=>{
        axios
        .post('http://localhost:5000/api/coordinator/getLeavetable', {
            center_id: 1
        })
        .then((response) => {
            console.log(response.data);
            setleavelist(response.data)
         


        });
    }

    const changeRoute=()=>{
// const navigate=useNavigate();
navigate('/coordinator/leaves')
    }
    return ( 
    
        <div className="pending-list">
            
            <Box style={{display: 'flex', justifyContent: 'right'}}>
            {flag  &&
                <Button variant="contained" onClick={changeRoute}><Typography className="seeall" >All Requests</Typography></Button>
            }

                
            </Box>
            <TableContainer component={Paper} style={{padding:'0px'}}>
                <Table sx={{ padding:"0px" }} aria-label="simple table" style={{textAlign:'right'}}>
                    <TableHead></TableHead>
                    <TableBody style={{textAlign:'left'}}>
                    {countleavelist.map((row) => (
                        <TableRow
                        key={row['leaveId']}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="right"><Avatar className='small-avatar'>M</Avatar></TableCell>
                        <TableCell align="right">{row['firstrName']+ " " + row['lastName']}</TableCell>
                        <TableCell align="right">{row['fromDate'].substring(0,10)}</TableCell>
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