import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import LeaveList from './LeaveTypeList';
import { Typography, Stack  } from '@mui/material';

import { IconPlus, IconAdjustments } from "@tabler/icons";


const NoLeaveLoad = () => {
    return (  
        <>
            <Box sx={{display:'flex', width:"100%", backgroundColor:'white', borderRadius:"10px", padding:"10px"}} >
                <IconAdjustments width={50} height={50} stroke={'#6f32be'}/><Typography variant='h2' sx={{padding:"10px"}}>No Confiurations for Leaves of UCSC E-Learning Centre </Typography>
            </Box>
            <Box sx={{display:'flex', width:"100%" }}>
                <Box sx={{width:'70%', paddingTop:"30px", textAlign:"left", justifyContent:"left", alignItems:"left" , backgroundColor:'white', borderRadius:'15px', marginTop:"30px"}}>
                    <Stack>
                        <Box>
                            <Typography variant='h3' sx={{paddingLeft:"30px"}} >Available Options to Configure</Typography>
                        </Box>
                        <Box className='start_config' sx={{textAlign:"center", padding:"20px", width:"100%" }}>
                            <LeaveList />
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{width:'30%',paddingTop:"30px", justifyContent:"right", display:"flex"}}>
                    <Stack justifyContent="right">
                        <Box>
                            <Typography variant='h4'>Add a configureation</Typography>
                        </Box>
                        <Box className='start_config' sx={{textAlign:"center", padding:"20px" , backgroundColor:'white', borderRadius:'15px',boxShadow:"5px" }}>
                            <IconPlus width={100} height={100}  fontWeight={1000} />
                        </Box>
                    </Stack>
                </Box>
            </Box>
          
        </>
    );
}
 
export default NoLeaveLoad;