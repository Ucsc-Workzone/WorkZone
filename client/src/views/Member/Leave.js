import Card from 'Components/Card';
import * as React from 'react';
import './styles/leave.css';
import axios from 'axios';
import { Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TotalIncomeLightCard from 'views/dashboard/Default/TotalIncomeLightCard';
import HeaderCounter from 'Components/HeaderCounter3';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LeaveForm from './LeaveForm';
import NotificationList from 'layout/MainLayout/Header/NotificationSection/NotificationList';
import NotificationListLeave from 'Components/LeaveNotification';
import Chip from '@mui/material/Chip';
import { useEffect } from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { resolveConfig } from 'prettier';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1E88E5',
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function createData(id, date, ndate, status, amember) {
    return { id, date, ndate, status, amember };
}

const rows = [
    createData('1', '2022.10.05', '02', 'Pending', 'M.R. Herath'),
    createData('2', '2022.08.05', '01', 'Accepted', 'S.D Bandara'),
    createData('3', '2022.07.04', '01', 'Accepted', 'J.K Rathnayake'),
    createData('4', '2022.06.14', '01', 'Rejected', 'J.K Rathnayake')
];

const HeadList = {
    head1: 'No. of Leaves in July',
    head2: 'No of Leaves in 2022',
    head3: 'Pending Assignments'
};
var CountList = {
    count1: 2,
    count2: 3,
    count3: 0
};

const MemberLeave = () => {
    const [open, setOpen] = React.useState(false);
    const [tdata, setTdata] = useState([]);
    const [age, setAge] = React.useState('');
    const [name, setName] = React.useState('');
    const [file, setFile] = React.useState(false);

    const [member, assignMember] = React.useState(1);
    const handleChangeA = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState('one');
    const [render, setRender] = React.useState(true);

    const handleChangeType = (event) => {
        setValue(event.target.value);
        if (event.target.value == 'short') {
            setRender(false);
            setFile(false)
        } else if (event.target.value == 'long') {
            setRender(false);
            setFile(true)
        } else {
            setRender(true);
            setFile(false)
        }
        console.log(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        });
    };
    const handleSubmitLeave = () => {
       
        const userid = localStorage.getItem('userid');
        const type=value;
        const member='H.R Herath'
        const reason=document.getElementById('reason').value
        console.log(type)
      
        // if(value=='long'){
            // const toDate=document.getElementById('todate').value;
        //     const fromDate=document.getElementById('fromdate').value;

        // }
        // else{
            const toDate=document.getElementById('date').value
        //     const fromDate=document.getElementById('date').value
        // }

        axios
            .post('http://localhost:5000/api/leave/submitLeave', {
                
                userid:userid,
                type:'short',
                member:member,
                reason:reason,
                toDate:toDate,
                endDate:toDate,
               



            })
            .then((response) => {
                console.log(response.data);
               if(response.data){
                window.location.reload(false);
               }
            });
    };

    const handleChangeMember = (e) => {
        console.log(event.target.value);
        assignMember(event.target.value);
    };
    useEffect(() => {
        const name = localStorage.getItem('name');
        setName(name);
        const userId = localStorage.getItem('userid');
        axios
            .post('http://localhost:5000/api/leave/getLeave', {
                userId: userId
            })
            .then((response) => {
                console.log(response.data);
                setTdata(response.data);
            });
    }, []);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="leavecontainer">
                <div>
                    <Button variant="contained" onClick={handleClickOpen} color="primary">
                        Request a Leave
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Container component="main" maxWidth="xs">
                                    <CssBaseline />
                                    <Box
                                        sx={{
                                            marginTop: 8,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Typography component="h1" variant="h5">
                                            Request Form
                                        </Typography>
                                        <Divider />
                                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        autoComplete="given-name"
                                                        name="firstName"
                                                        required
                                                        fullWidth
                                                        id="firstName"
                                                        label="Name"
                                                        autoFocus
                                                        value={name}
                                                        disabled={true}
                                                    />
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <FormLabel id="demo-row-radio-buttons-group-label">Leave Type</FormLabel>
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="row-radio-buttons-group"
                                                        value={value}
                                                        onChange={handleChangeType}
                                                    >
                                                        <FormControlLabel value="one" control={<Radio />} label="one day" />
                                                        <FormControlLabel value="short" control={<Radio />} label="short term" />
                                                        <FormControlLabel value="long" control={<Radio />} label="long term" />
                                                    </RadioGroup>
                                                </Grid>
                                               
                                                
                                                {render && (
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            id="date"
                                                            label="Date"
                                                            type="date"
                                                            defaultValue="2022-08-24"
                                                            sx={{ width: 220 }}
                                                            InputLabelProps={{
                                                                shrink: true
                                                            }}
                                                        />
                                                    </Grid>
                                                )}
                                                {!render && (
                                                    <>
                                                        <Grid item xs={12} >
                                                            <TextField
                                                                id="fromdate"
                                                                label="From Date"
                                                                type="date"
                                                                defaultValue="2017-05-24"
                                                                sx={{ width: 220 }}
                                                                InputLabelProps={{
                                                                    shrink: true
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} >
                                                            <TextField
                                                                id="todate"
                                                                label=" To Date"
                                                                type="date"
                                                                defaultValue="2022-08-24"
                                                                sx={{ width: 220 }}
                                                                InputLabelProps={{
                                                                    shrink: true
                                                                }}
                                                            />
                                                        </Grid>
                                                    </>
                                                )}

                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="reason"
                                                        label="Reason"
                                                        name="email"
                                                        autoComplete="email"
                                                    />
                                                </Grid>
                                                {file &&
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            autoComplete="given-name"
                                                            name="firstName"
                                                            required
                                                            fullWidth
                                                            id="firstName"
                                                            label="Proof"
                                                            autoFocus
                                                            
                                                            type='file'
                                                            
                                                        />
                                                    </Grid>
                                                }
                                                <Grid item xs={12}>
                                                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                                        <InputLabel id="demo-simple-select-filled-label">Memeber Assign</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-filled-label"
                                                            id="demo-simple-select-filled"
                                                            value={member}
                                                            onChange={handleChangeMember}
                                                        >
                                                            <MenuItem value={1}>M.S Herath</MenuItem>
                                                            <MenuItem value={2}>M.C Perera</MenuItem>
                                                            <MenuItem value={3}>M.N. Dias</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12}></Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Container>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSubmitLeave} variant="contained">
                                Request
                            </Button>
                            <Button onClick={handleClose} autoFocus variant="outlined">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <div className="card-section">
                    <HeaderCounter headlist={HeadList} countlist={CountList} />
                    {/* <TotalIncomeLightCard 
                title={'Leaves in August'}
                count={1}
                />
                <TotalIncomeLightCard 
                  title={'Leaves in 2022'}
                  count={8}
                /> */}
                </div>
                <div className="table-section-head">
                    <div className="table-section">
                        <Divider>
                            <h2>Recent Leave History</h2>
                        </Divider>
                        <TableContainer component={Paper} className="table-data">
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead className="tableHead">
                                    <TableRow>
                                        <StyledTableCell align="right">No</StyledTableCell>
                                        <StyledTableCell align="right">Start Date</StyledTableCell>
                                        <StyledTableCell align="right">End Date</StyledTableCell>
                                        <StyledTableCell align="right">No of Days</StyledTableCell>

                                        <StyledTableCell align="right">Status</StyledTableCell>
                                        <StyledTableCell align="right">Assign Member</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tdata.map((row) => (
                                        <StyledTableRow key={row['leaveId']}>
                                            <StyledTableCell align="right">{row['leaveId']}</StyledTableCell>
                                            <StyledTableCell align="right">{row['fromDate']}</StyledTableCell>
                                           <StyledTableCell align="right">{row['toDate']}</StyledTableCell>

                                            <StyledTableCell align="right">{row['nodays']}</StyledTableCell>

                                            {row['status'] == 'Pending' && (
                                                <StyledTableCell align="right">
                                                    {
                                                        <Chip
                                                            variant="contained"
                                                            color="warning"
                                                            label="Pending "
                                                            style={{ width: '100%' }}
                                                        />
                                                    }
                                                </StyledTableCell>
                                            )}
                                            {row['status'] == 'Accepted' && (
                                                <StyledTableCell align="right">
                                                    {
                                                        <Chip
                                                            variant="contained"
                                                            color="success"
                                                            label="Accepted"
                                                            style={{ width: '100%' }}
                                                        />
                                                    }
                                                </StyledTableCell>
                                            )}
                                            {row['status'] == 'Rejected' && (
                                                <StyledTableCell align="right">
                                                    {<Chip variant="contained" color="error" label="Rejected" style={{ width: '100%' }} />}
                                                </StyledTableCell>
                                            )}

                                            <StyledTableCell align="center">{row['assignMember']}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="notification-List">
                        {/* <Divider>
                            <h2>Leave Notifications</h2>
                        </Divider> */}
                        <NotificationListLeave></NotificationListLeave>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberLeave;
