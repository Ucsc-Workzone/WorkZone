import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

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

    function subtractYears(numOfYears, date = new Date()) {
        date.setFullYear(date.getFullYear() - numOfYears);
    
        return date;
      }
      
      //subtract 16 year from current Date - max date
      const result = subtractYears(16);
         
      //subtract 60 year from current Date - max date
      const result2 = subtractYears(60);

      // Date of today
      const today = new Date();

    const navigate = useNavigate();

    const [orgcode, setCode] = useState('#1000');
    const [gender, setGender] = React.useState('female');
    const [picdate, setDateDB] = React.useState(result);
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

    const handleDateChange = (newValue) => {
        setDateDB(newValue);
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
                    code:'#',
                    ftname: '',
                    ltname: '',
                    address:'',
                    contactNo: '',
                    email: '',
                    submit: null
                }}

                validationSchema={Yup.object().shape({
                    code: Yup.string('Must be a valid Organization').min(5).max(5).required('Organization Code is required'),
                    email: Yup.string().email('Must be a valid email').max(100).required('Email is required'),
                    ftname: Yup.string('Must be a valid Name').max(255).required('First Name is required'),
                    ltname: Yup.string('Must be a valid Name').max(255).required('Last Name is required'),
                    address: Yup.string().max(255).required('Address is required'),
                    contactNo: Yup.string('Must be a valid Number').min(10).max(10).required('Contact No. is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    axios
                        .post('http://localhost:5000/api/auth/signupuser', {
                            username: values.email,
                            orgcode: values.code,
                            address: values.address,
                            firstName: values.ftname,
                            lastName: values.ltname,
                            gender: gender,
                            contactNo: values.contactNo
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
                    console.log('Submit handle');
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
                                <FormControl fullWidth error={Boolean(touched.code && errors.code)} sx={{ ...theme.typography.customInput }}>
                                    <TextField
                                        fullWidth
                                        label="Division Code"
                                        margin="normal"
                                        name="code"
                                        value={values.code}
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                    {touched.code && errors.code && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.code}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            <Box sx={{ alignItems: 'center', display: 'flex' }}>
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Box>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth error={Boolean(touched.ftname && errors.ftname)} sx={{ ...theme.typography.customInput }}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        margin="normal"
                                        name="ftname"
                                        value={values.ftname}
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        inputProps={{}}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                    {touched.ftname && errors.ftname && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.ftname}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth error={Boolean(touched.ltname && errors.ltname)} sx={{ ...theme.typography.customInput }}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        margin="normal"
                                        name="ltname"
                                        value={values.ltname}
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                    {touched.ltname && errors.ltname && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.ltname}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        maxDate={result}
                                        minDate={result2}
                                        label="Date of Birth"
                                        inputFormat="MM/dd/yyyy"
                                        openTo="Year"
                                        views={['year', 'month', 'day']}
                                        name="picdate"
                                        value={picdate}
                                        sx={{ ...theme.typography.customInput }}
                                        onChange={handleDateChange}
                                        onBlur={handleBlur}
                                        renderInput={(params) => <TextField {...params} fullWidth fullHeight/>
                                    }
                                />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl fullWidth error={Boolean(touched.contactNo && errors.contactNo)} sx={{ ...theme.typography.customInput }}>
                                <TextField
                                    fullWidth
                                    label="Contact No."
                                    margin="normal"
                                    name="contactNo"
                                    type="text"
                                    value={values.contactNo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    sx={{ ...theme.typography.customInput }}
                                />
                                    {touched.contactNo && errors.contactNo && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.contactNo}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth error={Boolean(touched.address && errors.address)} sx={{ ...theme.typography.customInput }}>
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        margin="normal"
                                        name="address"
                                        value={values.address}
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                    {touched.address && errors.address && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.address}
                                        </FormHelperText>
                                    )}
                                </FormControl>
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
                                    onBlur={handleBlur}
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
