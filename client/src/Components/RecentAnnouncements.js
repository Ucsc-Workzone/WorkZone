import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { makeStyles } from '@material-ui/core';
import userimg from './../assets/images/user.png';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

import * as Yup from 'yup';
import { Formik } from 'formik';

import useScriptRef from 'hooks/useScriptRef';

const useStyles = makeStyles({
    flexGrow: {
        flex: '1'
    },
    button: {
        backgroundColor: '#fff',
        color: '#3c52b2',
        '&:hover': {
            backgroundColor: '#3c52b2',
            color: '#fff'
        }
    }
});

import './styles/recentannou.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
var Annoucementlist = {
    id: 1,
    topic: 'New Year Vacation',
    by: 'by Admin User - Thursday, 4 August 2022, 3:29 PM',
    description:
        ' — Dear students,You have been issued the Official Student Registration Number and Index Number for the degree programme. Please follow the steps below to view your official Student Registration Number and the Index Number.You are strongly advised to use your  official Student Registration Number and Index Number Number for all academic activities including examinations and assignments of the programme with effect from 8th August 2022.IMPORTANT: The Temporary Student Registration Number issued will be considered invalid from 15th August 2022.Should you need further assistance, please do not hesitate to contact us through the email, exam@ucsc.cmb.ac.lk Senior Assistant Registrar Examinations & Registration Division2022.08.04'
};

const RecentAnnoucements = ({ ...others }) => {
    const [recent, setRecenet] = useState([]);
    const [allnot, setAll] = useState([]);
    useEffect(() => {
        allAnnoucements();
    }, []);

    const allAnnoucements = () => {
        axios
            .post('http://localhost:5000/api/notification/allannoucements', {
                center_id: 1
            })
            .then((response) => {
                console.log(response.data);
                setRecenet(response.data[0]);
                setAll(response.data);
             //   console.log(allnot)
            });
    };

    const [openfull, setfullOpen] = React.useState(false);

    const handleClickfullOpen = () => {
        setfullOpen(true);
    };

    const handlefullClose = () => {
        setfullOpen(false);
    };

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [type1, settype] = React.useState(true);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [openpop, setOpenpop] = React.useState(true);

    const handleopopOpen = () => {
        setOpenpop(true);
    };

    const handlepopClose = () => {
        setOpenpop(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <Dialog fullScreen open={openfull} onClose={handlefullClose} TransitionComponent={Transition}>
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handlefullClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1, color: 'white' }} variant="h2" component="div">
                                Annoucement List
                            </Typography>
                            {/* <Button autoFocus color="inherit" onClick={handlefullClose}>
                            Close
                        </Button> */}
                        </Toolbar>
                    </AppBar>
                    <List>
                        
                        {allnot.map((noti) => {
                            return(
                                <>
                                <ListItem button>
                                    <ListItemText primary={noti['title']} secondary={noti['content']} />
                                </ListItem>
                                <Divider />
                            </>
                            )
                           
                        })}

                        {/* <ListItem button>
                            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                        </ListItem> */}
                    </List>
                </Dialog>
            </div>
            <Box style={{ display: 'flex', justifyContent: 'right' }}>
                <Button variant="contained" onClick={handleClickfullOpen}>
                    <Typography className="seeall">All Annoucements</Typography>
                </Button>
            </Box>
            <Typography variant="h2" component="h3" className="head1" textAlign="center">
                Annoucements
            </Typography>
            <Typography variant="h3" component="h4" className="head11">
                Recently Published
            </Typography>
            <Box style={{ display: 'flex', justifyContent: 'right' }}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    <Typography className="addone">+ NEW</Typography>
                </Button>
            </Box>
            <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start" className="">
                    <ListItemAvatar>
                        <Avatar alt="admin" src={userimg} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography variant="h4" component="h3" className="">
                                {recent['title']}
                            </Typography>
                        }
                        secondary={
                            <React.Fragment>
                                <Accordion class="xx">
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                        <Typography sx={{ display: '' }} component="h5" variant="h5" color="text.primary">
                                            {recent['from']}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography justifyContent="center">{recent['content']}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>

            <React.Fragment>
                <Dialog fullWidth={fullWidth} open={open} onClose={handleClose}>
                    <Formik
                        initialValues={{
                            title: '',
                            description: '',
                            submit: null
                        }}
                        validationSchema={Yup.object().shape({
                            title: Yup.string().min(3, 'title is too short').max(255, 'title is too long').required('Title is required'),
                            description: Yup.string()
                                .min(10, 'description is too short')
                                .max(255, 'description is too long')
                                .required('Description is required')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            const userRole=localStorage.getItem('userRole');
                            axios
                                .post('http://localhost:5000/api/notification/publishannoucements', {
                                    title: values.title,
                                    description: values.description,
                                    from:userRole
                                })
                                .then((response) => {
                                    console.log(response);
                                    // if (response == '1') {
                                    //     settype(true);
                                    // } else {
                                    //     settype(false);
                                    // }

                                    // handleopopOpen(true);
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
                            console.log(values);
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit} {...others}>
                                <DialogTitle sx={{ backgroundColor: '#185A90', color: 'white', fontSize: '16', textAlign: 'center' }}>
                                    Annoucement Form
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText sx={{ fontSize: '14', paddingTop: '10px', color: 'black' }}>
                                        Publish your Annoucement
                                    </DialogContentText>

                                    <Box
                                        // noValidate
                                        // component="form"
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            m: '0'
                                            // width: 'fit-content',
                                        }}
                                    >
                                        <Typography sx={{ paddingTop: '10px' }}>Title</Typography>

                                        <FormControl sx={{ mt: 2, minWidth: 120 }} error={Boolean(touched.title && errors.title)}>
                                            <TextField
                                                id="outlined-number"
                                                label="Enter the title"
                                                name="title"
                                                type="text"
                                                value={values.title}
                                                onChange={handleChange}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                            />

                                            {touched.title && errors.title && (
                                                <FormHelperText error id="standard-weight-helper-text--register">
                                                    {errors.title}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Box>
                                    <Divider variant="inset" />

                                    <Box
                                        // noValidate
                                        // component="form"
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            m: '0'
                                            // width: 'fit-content',
                                        }}
                                    >
                                        <Typography sx={{ paddingTop: '10px' }}>Description</Typography>

                                        <FormControl
                                            sx={{ mt: 2, minWidth: 120 }}
                                            error={Boolean(touched.description && errors.description)}
                                        >
                                            <TextareaAutosize
                                                rows={5}
                                                aria-label="Enter the desicription"
                                                placeholder="Enter the desicription"
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                style={{ width: '100%', height: 200, borderRadius: '5px' }}
                                            />
                                            {/* <TextField
                            id="outlined-number"
                            label="Enter the desicription"
                            name="description"
                            value={values.sick}
                            onChange={handleChange}
                            type="number"
                            InputProps={{ inputProps: { min: 0, max: 15 } }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                          
                            /> */}
                                            {touched.description && errors.description && (
                                                <FormHelperText error id="standard-weight-helper-text--register">
                                                    {errors.description}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Box>
                                    <Divider variant="inset" />
                                </DialogContent>
                                <DialogActions>
                                    <Button
                                        variant="contained"
                                        sx={{ width: '200px' }}
                                        disableElevation
                                        disabled={isSubmitting}
                                        type="submit"
                                        // onClick={handleClose}
                                    >
                                        Publish
                                    </Button>
                                    <Button variant="outlined" sx={{ width: '100px' }} onClick={handleClose}>
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </form>
                        )}
                    </Formik>
                </Dialog>
            </React.Fragment>
        </>
    );
};

export default RecentAnnoucements;
