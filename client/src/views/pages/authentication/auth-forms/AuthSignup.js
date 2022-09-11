import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
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
    Select,
    Alert,
    AlertTitle
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
    const navigate = useNavigate();
    const [orgcode, setCode] = useState('#1000');
    const [gender, setGender] = React.useState('female');
    const [date, setDate] = useState('');
    const [add, setAdd] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [contactno, setPhone] = useState('');
    const [alert, setAlert] = useState('');

    const handleChangCode = (event) => {
        setCode(event.target.value);
    };

    const handleChangeDOB = (event) => {
        setDate(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleChangeAdd = (event) => {
        setAdd(event.target.value);
    };

    const handleChangePhon = (event) => {
        setPhone(event.target.value);
    };

    const handleSubmit = () => {};
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
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    axios
                        .post('http://localhost:5000/api/auth/signupuser', {
                            username: values.email,
                            orgcode: orgcode,
                            address: 'kandy',
                            firstName: fname,
                            lastName: lname,
                            gender: gender,
                            contactNo: contactno
                            // orgcode:'orgcode',
                            // address:add,
                            // firstName:fname,
                            // lastName:lname,
                            // gender:'male',
                            // contactNo:contactno
                        })
                        .then((response) => {
                            console.log(response.data);
                            setAlert(response.data);
                            if(response.data=='success'){
                                setTimeout(()=>{
                                    navigate('/')

                                },3000)
                            }
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
                    console.log('najbaj');
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            {alert == 'success' && (
                                <Grid item xs={12}>
                                    <Alert severity="success">
                                        <AlertTitle>Registartion Success</AlertTitle>
                                        You have been suceessfully registered — <strong>You will recieve confimation mail after approval by Your orgnization admin</strong>
                                    </Alert>
                                </Grid>
                            )}
                            {alert == 'orgerror' && (
                                <Grid item xs={12}>
                                    <Alert severity="warning">
                                        <AlertTitle>Invalid Orginization code</AlertTitle>
                                        Organization Code is invalid — <strong>Try again or contact your Organizarion admin!</strong>
                                    </Alert>
                                </Grid>
                            )}
                            {alert == 'exist' && (
                                <Grid item xs={12}>
                                    <Alert severity="warning">
                                        <AlertTitle>User already exist</AlertTitle>
                                        Please enter a another email address — <strong>Try again!</strong>
                                    </Alert>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Organization Code"
                                    margin="normal"
                                    name="orgcode"
                                    type="text"
                                    defaultValue=""
                                    onChange={handleChangCode}
                                    sx={{ ...theme.typography.customInput }}
                                />
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

                            <Grid item xs={6}>
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
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Contact No."
                                    margin="normal"
                                    name="contactno"
                                    type="text"
                                    defaultValue=""
                                    onChange={handleChangePhon}
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
                                value={gender}
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
                                    Signup
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
