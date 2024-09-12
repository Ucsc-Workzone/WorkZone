import * as React from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import axios from 'axios';
import './styles/pendingcounter.css';
import { useEffect } from 'react';
import { useState } from 'react';


const PendingCounter = ({headlist2, countlist2}) => {
    const [countleave,setleave]=useState();
    useEffect(()=>{
getCount();
    }
    )

    const getCount=()=>{
        axios
        .post('http://localhost:5000/api/coordinator/getcardDataWR', {
            center_id: 1
        })
        .then((response) => {
            console.log(response.data);
            setleave(response.data[0]['count'])
         


        });
    }
    return (
        <div className="pending-counter"> 
            <Grid container spacing={2} minHeight={160}>
                <Grid xs display="flex" justifyContent="center" alignItems="center" direction="column" >
                    <Box xs display="block">
                        <Typography variant="h3" component="p" className="" fontSize="1.5vw">
                            {"Pending"}
                        </Typography>
                    </Box>
                    <Box xs display="block" >
                        <Typography variant="h1" component="p" className="" fontSize="5vw">
                           {countleave}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
        );
}
 
export default PendingCounter;