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
import Divider from '@mui/material/Divider';
import {useEffect,useState} from 'react';
import axios from 'axios';
function createData(id, name, date) {
  return { id, name, date };
}

// const rows = [
//   createData('member1.jpg', 'Malithi Perera', '27/08/2022'),
//   createData('member2.jpg', 'Bimsara Kulasekara', '27/08/2022'),
//   createData('member6.jpg', 'Hiruni Guruge', '27/08/2022')
// ];

const rows = [
    createData('Login issue', '2022/10/25', 'pamodhamahagamage98@gmail.com'),
    createData('issueLogin ', '2022/10/24', 'kulasekarakmbs@gmail.com'),
];


import './styles/pendinglist.css';
import { Typography } from '@mui/material';

const projects ={
    id:1,
    name:"AWS Deployment",
    pending:"2 Days",
    date:"2022-11-29"
  }

const LeavePendingList = ({flag}) => {
//     const [countlist,setleavelist]=useState([]);
//     useEffect(()=>{
// getCount();
//     },[]
//     )

//     const getCount=()=>{
//         axios
//         .post('http://localhost:5000/api/coordinator/getTable', {
//             center_id: 1
//         })
//         .then((response) => {
//             console.log(response.data);
//             setleavelist(response.data)
         


//         });
//     }
    return ( 
    
        <div className="pending-list2">
            <Box style={{display: 'flex', justifyContent: 'right', marginBottom: '20px'}}>
                <Button variant="contained"><Typography className="seeall" >View All</Typography></Button>
        
                
            </Box>
            <TableContainer component={Paper} style={{padding:'0px'}}>
                <Table sx={{ padding:"0px" }} aria-label="simple table" style={{textAlign:'right'}}>
                    <TableHead></TableHead>
                    <TableBody style={{textAlign:'left'}}>
            
                        <TableRow
                        key={1}
                        sx={{ '&:last-child td, &:last-child th': { border: 0, paddingBottom:"10px" } }}
                        >
                        <TableCell align="right">Login issue</TableCell>
                        <TableCell align="right">2022/10/25</TableCell>
                        <Button variant="contained" className="process"><Typography >View</Typography></Button>
                        </ TableRow >
                        <Divider variant="inset"  />
                        <Divider variant="inset"  />
                        <TableRow
                        key={2}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="right">issueLogin</TableCell>
                        <TableCell align="right">2022/10/24</TableCell>
                        <Button variant="contained" className="process" sx={{borderRadius:"20px"}}><Typography >View</Typography></Button>
                        </ TableRow >
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
     );
}
 
export default LeavePendingList;