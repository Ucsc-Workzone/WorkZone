import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';

import FormLabel from '@mui/material/FormLabel';
// material-ui
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery,
    MenuItem,
    Select
} from '@mui/material';

import * as Yup from 'yup';
import { Formik } from 'formik';

import useScriptRef from 'hooks/useScriptRef';

import AnimateButton from 'ui-component/extended/AnimateButton';
const MenuProps = {
    PaperProps: {
        style: {
            width: 250
        }
    }
};

const FirebaseRegister = ({ ...others }) => {
    const [value, setValue] = React.useState('female');
    const [date,setDate]=useState('');
    const [add,setAdd]=useState('');
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const handleChangeDOB = (event) => {
        setDate(event.target.value)
    };

    const handleChangeGender = (event) => {
        setValue(event.target.value);
    };
    const handleChangeAdd = (event) => {
        setAdd(event.target.value);
    };

    const handleSubmit=(()=>{})
    const [age, setAge] = React.useState('');

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleChangFname = (event) => {
        setFname(event.target.value);
    };
    const handleChangeLname = (event) => {
        setLname(event.target.value);
    };
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <AnimateButton></AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center"></Grid>
            </Grid>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {

                    axios
                    .post('http://localhost:5000/api/auth/registerUser', {
                        username: values.email,
                        role:age,
                        dob:date,
                        address:add,
                        firstName:fname,
                        lastName:lname
                    })
                    .then((response) => {
                        
                        console.log(response)
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
                    console.log("najbaj")
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12}>
                                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={age}
                                        onChange={handleChangeAge}
                                        MenuProps={MenuProps}
                                    >
                                       

                                        <MenuItem value={1}>Coordinator</MenuItem>
                                        <MenuItem value={2}>Member</MenuItem>

                                        <MenuItem value={3}>Management Assistant</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Box sx={{ alignItems: 'center', display: 'flex' }}>
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Box>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    name="fname"
                                    type="text"
                                    defaultValue=""
                                    onChange={handleChangFname}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    margin="normal"
                                    name="lname"
                                    type="text"
                                    defaultValue=""
                                    onChange={handleChangeLname}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="DOB"
                                    margin="normal"
                                    name="dob"
                                    type="date"
                                    defaultValue=""
                                    onChange={handleChangeDOB}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    margin="normal"
                                    name="lname"
                                    type="text"
                                    defaultValue=""
                                    onChange={handleChangeAdd}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-register"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChangeGender}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>

                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item></Grid>
                        </Grid>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Register
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseRegister;
