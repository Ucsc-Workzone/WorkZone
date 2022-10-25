import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import LeaveList from './LeaveTypeList';
import LeaveSetList from './LeaveTypeSet';
import { Typography, Stack, Chip  } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

import { IconPlus, IconAdjustments } from "@tabler/icons";
import CreateLeaveConfig from './CreateLeaveConfig';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import {FormHelperText,} from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



import * as Yup from 'yup';
import { Formik } from 'formik';

import useScriptRef from 'hooks/useScriptRef';

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


    

const HaveLeaveLoad = ({ ...others }) => {

    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [ancount, setAnn] = React.useState('0');
    const [wkcount, setWeek] = React.useState('0');
    const [skcount, setSick] = React.useState('0');
    const [matcount, setMat] = React.useState('0');
    const [mercount, setMer] = React.useState('0');

    const [type1, settype] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const [openpop, setOpenpop] = React.useState(true);


    const handleopopOpen = () => {
        setOpenpop(true);
    };
  
    const handlepopClose = () => {
       setOpenpop(false);
    };
    

    return (  
        <>
        <Box sx={{display:'flex', width:"100%", backgroundColor:'white', borderRadius:"10px", padding:"10px"}} >
            <IconAdjustments width={50} height={50} stroke={'#6f32be'}/><Typography variant='h2' sx={{padding:"10px"}}>Leave COnfiguration Panel<Chip color="success" label="Configuration is fixed" sx={{marginLeft:'20px'}} icon={<SettingsOutlinedIcon />} /></Typography>
        </Box>
        <Snackbar open={openpop} autoHideDuration={6000} onClose={handlepopClose} anchorOrigin={{ vertical: 'top',horizontal: 'right' }}>
            { 
                type1 && 
                <Alert onClose={handlepopClose} variant="filled"  severity="success" sx={{ width: '100%' }}  >
                    Configuration Successfull!
                </Alert>
             } 
             {/* { 
                !(type1) && <Alert onClose={handlepopClose} variant="filled"  severity="warning" sx={{ width: '100%' }}  >
                Something went wrong ,please try again later!
                </Alert>
            } */}
            {/* {
                type1==null && <></>
            } */}
        </Snackbar>
        <Box sx={{width:"100%" }}>
            <Box sx={{width:'100%',paddingTop:"30px", justifyContent:"center", display:"flex"}}>
                <Box sx={{width:'100%',paddingTop:"30px", display:"flex"}}>
                    <Box sx={{width:'70%'}}> 
                        <Stack justifyContent="right">
                            <Box>
                                <Typography variant='h4'> Fixed Configuration</Typography>
                            </Box>
                            {/* <Box className='start_config' sx={{textAlign:"center", padding:"20px" , backgroundColor:'white', borderRadius:'15px',boxShadow:"5px" }}> */}
                            <Box className='start_config' sx={{textAlign:"center", padding:"20px", width:"100%" }}>
                                <LeaveSetList />
                            </Box>
                            {/* </Box> */}
                        </Stack>
                    </Box>
                    <Box sx={{width:'30%'}}>
                        <Stack justifyContent="left">
                            <Box>
                                <Typography variant='h4'>Update configuration</Typography>
                            </Box>
                            {/* <Box className='start_config' sx={{textAlign:"center", padding:"20px" , backgroundColor:'white', borderRadius:'15px',boxShadow:"5px" }}> */}
                                <Button className={classes.button}><IconPlus width={100} height={100}  fontWeight={1000} onClick={handleClickOpen}/></Button>
                            {/* </Box> */}
                        </Stack>
                    </Box>
                </Box>    
            </Box>
            <Box sx={{width:'100%', paddingTop:"30px", textAlign:"left", justifyContent:"left", alignItems:"left" , backgroundColor:'white', borderRadius:'15px', marginTop:"30px"}}>
                <Stack>
                    <Box>
                        <Typography variant='h3' sx={{paddingLeft:"30px"}} >Available Options to Configure</Typography>
                    </Box>
                    <Box className='start_config' sx={{textAlign:"center", padding:"20px", width:"100%" }}>
                        <LeaveList />
                    </Box>
                </Stack>
            </Box>
           
            <React.Fragment>
                <Dialog
                    fullWidth={fullWidth}
                    open={open}
                    onClose={handleClose}
                >
                    <Formik
                        initialValues={{
                            annual: '0',
                            weekly: '0',
                            sick: '0',
                            maternity: '0',
                            mercantile: '0',
                            submit: null
                        }}
                        validationSchema={Yup.object().shape({
                            annual: Yup.number('Must be a valid number').min(0, 'can not be a negative value').max(30, 'can not exceed 30').required('Annual Leave count is required'),
                            weekly: Yup.number('Must be a valid number').min(0, 'only available options can use').max(2, 'only available options can use').required('Weekly Leave type is required'),
                            sick: Yup.number('Must be a valid number').min(0, 'can not be a negative value').max(15, 'can not exceed 15').required('Sick Leave count is required'),
                            maternity: Yup.number('Must be a valid number').min(0, 'can not be a negative value').max(17, 'can not exceed 17').required('Maternity Leave count is required'),
                            mercantile: Yup.number('Must be a valid number').min(0, 'only available options can use').max(1, 'only available options can use').required('Mercantile Leave type is required'),
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {

                            axios
                            .post('http://localhost:5000/api/Leave/leaveConfig', {
                                annual: values.annual,
                                weekly:values.weekly,
                                sick:values.sick,
                                maternity:values.maternity,
                                mercantile:values.mercantile,
                            })
                            .then((response) => {
                                console.log(response)
                                if(response=='1'){
                                   settype(true);  
                                }else{
                                   settype(false);
                                }

                                handleopopOpen(true);
                            });
                        

                            // try {
                            //     if (scriptedRef.current) {
                            //         setStatus({ success: true });
                            //         setSubmitting(false);
                            //     }
                            // } catch (err) {
                            //     console.error(err);
                            //     if (scriptedRef.current) {
                            //         setStatus({ success: false });
                            //         setErrors({ submit: err.message });
                            //         setSubmitting(false);
                            //     }
                            // }
                            console.log(values)
                        }}
                    >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <DialogTitle sx={{backgroundColor: '#185A90',color:"white",fontSize:"16"}}>Leave Configuration Panel</DialogTitle>
                    <DialogContent>
                    <DialogContentText sx={{fontSize:"14",paddingTop:"10px", color:"black"}}>
                        Select the Relavant Leave Types and the Constraints.
                    </DialogContentText>
                    

                    
                    <Box
                        // noValidate
                        // component="form"
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: '0',
                        // width: 'fit-content',

                        }}
                    >
                        <Typography sx={{paddingTop:"10px"}}>Annual Leaves</Typography>  
                        
                        <FormControl sx={{ mt: 2, minWidth: 120 }} error={Boolean(touched.email && errors.email)}>
                        <TextField
                            id="outlined-number"
                            label="allowed(days)"
                            name="annual"
                            type="number"
                            value={values.annual}
                            onChange={handleChange}
                            InputProps={{ inputProps: { min: 0, max: 30 } }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />

                            {touched.annual && errors.annual && (
                            <FormHelperText error id="standard-weight-helper-text--register">
                                {errors.annual}
                            </FormHelperText>
                        )}
                        </FormControl>

                    </Box>
                    <Divider variant="inset"  />

                    <Box
                        // noValidate
                        // component="form"
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: '0',
                        // width: 'fit-content',

                        }}
                    >
                        <Typography sx={{paddingTop:"10px"}}>Weekly Leaves</Typography>   
                        <FormControl sx={{ mt: 2, minWidth: 120 }} error={Boolean(touched.email && errors.email)}>
                        <InputLabel htmlFor="weekly_type">allowed</InputLabel>
                        <Select
                            autoFocus
                            name="weekly"
                            value={values.weekly}
                            onChange={handleChange}
                            label="allowed"
                            inputProps={{
                            id: 'weekly_type',
                            }}

                        >
                            <MenuItem value="0">None</MenuItem>
                            <MenuItem value="1">Half Day</MenuItem>
                            <MenuItem value="2">Full Day</MenuItem>
                        </Select>

                        {touched.weekly && errors.weekly && (
                            <FormHelperText error id="standard-weight-helper-text--register">
                                {errors.weekly}
                            </FormHelperText>
                        )}
                        </FormControl>
                       
                    </Box>
                    <Divider variant="inset"  />
                    <Box
                        // noValidate
                        // component="form"
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: '0',
                        // width: 'fit-content',

                        }}
                    >
                        <Typography sx={{paddingTop:"10px"}}>Sick Leave</Typography>  
                        
                        <FormControl sx={{ mt: 2, minWidth: 120 }} error={Boolean(touched.email && errors.email)}>
                        <TextField
                            id="outlined-number"
                            label="allowed(days)"
                            name="sick"
                            value={values.sick}
                            onChange={handleChange}
                            type="number"
                            InputProps={{ inputProps: { min: 0, max: 15 } }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                          
                            />
                            {touched.sick && errors.sick && (
                            <FormHelperText error id="standard-weight-helper-text--register">
                                {errors.sick}
                            </FormHelperText>
                        )}
                        </FormControl>

                    </Box>
                    <Divider variant="inset"  />
                    <Box
                        // noValidate
                        // component="form"
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: '0',
                        // width: 'fit-content',

                        }}
                    >
                        <Typography sx={{paddingTop:"10px"}}>Maternity leave</Typography>  
                        
                        <FormControl sx={{ mt: 2, minWidth: 120 }} error={Boolean(touched.email && errors.email)}>
                        <TextField
                            id="outlined-number"
                            label="allowed(weeks)"
                            name="maternity"
                            value={values.maternity}
                            onChange={handleChange}
                            type="number"
                            InputProps={{ inputProps: { min: 0, max: 17 } }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                          
                            />

                            {touched.maternity && errors.maternity && (
                            <FormHelperText error id="standard-weight-helper-text--register">
                                {errors.maternity}
                            </FormHelperText>
                        )}          
                        </FormControl>

                    </Box>
                    <Divider variant="inset"  />
                    <Box
                        // noValidate
                        component="form"
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: '0',
                        // width: 'fit-content',

                        }}
                    >
                        <Typography sx={{paddingTop:"10px"}}>Mercantile Holidays</Typography>  
                        
                        <FormControl sx={{ mt: 2, minWidth: 120 }} error={Boolean(touched.email && errors.email)}>
                        <InputLabel htmlFor="weekly_type">allowed(status)</InputLabel>
                        <Select
                            autoFocus
                            name="mercantile"
                            value={values.mercantile}
                            onChange={handleChange}
                            label="allowed(status)"
                            inputProps={{
                            id: 'merc_type',
                            }}
                        >
                            <MenuItem value="0">No</MenuItem>
                            <MenuItem value="1">Yes</MenuItem>
                            
                        </Select>
                        {touched.mercantile && errors.mercantile && (
                            <FormHelperText error id="standard-weight-helper-text--register">
                                {errors.mercantile}
                            </FormHelperText>
                        )}
                        </FormControl>
                    </Box>
                    
                    </DialogContent>
                    <DialogActions>
                    <Button variant="contained" 
                        sx={{width:"100px"}} 
                        disableElevation
                        disabled={isSubmitting} 
                        type="submit"
                        // onClick={handleClose}
                    >
                        Save
                    </Button>
                    <Button variant="outlined" sx={{width:"100px"}} onClick={handleClose}>Cancel</Button>
                    
                    </DialogActions>
                    </form>
                    )}
                    </Formik>
                </Dialog>
                </React.Fragment>
        </Box>
      
    </>
    );
}
 
export default HaveLeaveLoad;