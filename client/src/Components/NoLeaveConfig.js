import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import LeaveList from './LeaveTypeList';
import { Typography, Stack, Chip  } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

import { IconPlus, IconAdjustments } from "@tabler/icons";
import CreateLeaveConfig from './CreateLeaveConfig';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const useStyles = makeStyles({
    flexGrow: {
      flex: '1',
    },
    button: {
      backgroundColor: '#fff',
      color: '#3c52b2',
      '&:hover': {
        backgroundColor: '#3c52b2',
        color: '#fff',
    },
  }})



const NoLeaveLoad = () => {
    const classes = useStyles()
    return (  
        <>
            <Box sx={{display:'flex', width:"100%", backgroundColor:'white', borderRadius:"10px", padding:"10px"}} >
                <IconAdjustments width={50} height={50} stroke={'#6f32be'}/><Typography variant='h2' sx={{padding:"10px"}}>UCSC E-Learning Centre<Chip color="warning" label="No Configuration" sx={{marginLeft:'20px'}} icon={<SettingsOutlinedIcon />} /></Typography>
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
                <Box sx={{width:'30%',paddingTop:"30px", justifyContent:"center", display:"flex"}}>
                    <Stack justifyContent="right">
                        <Box>
                            <Typography variant='h4'>Add a configureation</Typography>
                        </Box>
                        {/* <Box className='start_config' sx={{textAlign:"center", padding:"20px" , backgroundColor:'white', borderRadius:'15px',boxShadow:"5px" }}> */}
                            <Button className={classes.button}><IconPlus width={100} height={100}  fontWeight={1000} /></Button>
                        {/* </Box> */}
                    </Stack>
                </Box>
            </Box>
          
        </>
    );
}
 
export default NoLeaveLoad;