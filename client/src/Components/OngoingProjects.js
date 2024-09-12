import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import DoughtChart from 'Components/DoughtChart';
import { useState } from 'react';
import { CardActionArea } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';

import Chip from '@mui/material/Chip';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ProjectForm from '../views/Coordinator/ProjectForm';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import './styles/table.css';

import UpcomingList from './UpcomingsList';
import { useEffect } from 'react';

const columns = [
    { id: 'no', label: 'No.', align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'name', label: 'Name', align: 'left', fontsize: '15px', format: (value) => value.toLocaleString('en-US') },
    {
        id: 'date',
        label: 'Date',
        // minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'duration',
        label: 'Duration',
        // minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'status',
        label: 'Status',
        // minWidth: 170,
        align: 'center'
    },
    {
        id: 'action',
        label: 'Action',
        // minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(0)
    }
];

const projects = {
    id1: { name: 'Mobile App', pending: '4 Days', date: '27/03/2022' },
    id2: { name: 'Mobile App', pending: '4 Days', date: '27/03/2022' },
    id3: { name: 'Mobile App', pending: '4 Days', date: '27/03/2022' },
    id4: { name: 'Mobile App', pending: '4 Days', date: '27/03/2022' },
    id5: { name: 'Mobile App', pending: '4 Days', date: '27/03/2022' }
};
function createData(no, name, date, duration, status, action) {
    return { no, name, date, duration, status, action };
}

const rows = [
    createData('1', 'Pamodha Mahagamage', '20/08/2022', '3', 1, 1.1),
    createData('2', 'Bimsara Kulasekara', '20/08/2022', '2', 2, 2.1),
    createData('3', 'Malithi Perera', '18/08/2022', '1', 1, 3.1),
    createData('4', 'Kavindu Gunawardana', '17/08/2022', '1', 1, 4.1),
    createData('5', 'Hiruni Guruge', '16/08/2022', '2', 1, 5.1),
    createData('6', 'Dulanjana Weerasinghe', '15/08/2022', '2', 2, 6.1)
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0C518A',
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12
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

const LeaveHistoryTable = ({ flag }) => {
    const [prec, setpercent] = useState(0);
    const [userData, setUserData] = useState({
        // labels: ["CM", "NC"],
        datasets: [
            {
                label: 'Users Gained',
                data: [prec, 100 - prec],
                backgroundColor: ['#0f65fa', '#c2c6d1'],
                borderColor: 'white',
                borderWidth: 2
            }
        ]
    });

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [pend, setstatus] = React.useState(1);

    const handleChange = (event) => {
        setstatus(event.target.value);
    };

    const [picdate, setValue] = React.useState(new Date('2022-08-24T21:11:54'));

    const handleDateChange = (newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [projectCard, setProjectCard] = useState([]);
    useEffect(() => {
        getProjectData();
    }, []);
    const getProjectData = () => {
        axios
            .post('http://localhost:5000/api/project/getCoordinatorCards', {
                center_id: 1
            })
            .then((response) => {
                console.log(response.data);
                setProjectCard(response.data);
            });
    };
    return (
        <React.Fragment>
            <Paper sx={{ width: '100%', overflow: 'hidden', paddingTop: '30px', marginTop: '20px' }}>
                <Typography variant="h2" component="h4" className="" textAlign={'center'}>
                    Ongoing Projects
                </Typography>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Date"
                        inputFormat="MM/dd/yyyy"
                        value={picdate}
                        style={{ marginLeft: '30px', marginBottom: '20px' }}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider> */}
                {/* <TextField
                    id="search-bar"
                    className="textname"
                    onInput={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    label="Search by Name"
                    sx={{ height: '80px' }}
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                /> */}
                {/* <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: 'blue', marginLeft: '30px', marginBottom: '20px' }} />
                </IconButton> */}
                <Box
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        align: 'center',
                        marginTop: '20px',
                        marginBottom: '10px'
                    }}
                >
                    {flag && (
                        <Button variant="outlined" onClick={handleClickOpen}>
                            + Create Project
                        </Button>
                    )}
                </Box>
                <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogTitle sx={{ backgroundColor: '#185A90', color: 'white', fontSize: '16' }}>
                        <Button onClick={handleClose} autoFocus variant="text">
                            <HighlightOffIcon style={{ color: 'white', justifyContent: 'right' }} />
                        </Button>
                        Project Initialization Form
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <ProjectForm />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Box
                            style={{ width: '100%', display: 'flex', justifyContent: 'right', marginTop: '10px', marginBottom: '10px' }}
                        ></Box>
                    </DialogActions>
                </Dialog>

                <List sx={{ padding: '10px', display: 'block', justifyContent: 'center', maxHeight: '700px', overflow: 'auto' }}>
                    {projectCard.map((projectList) => {
                        return (
                            <ListItem sx={{ padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card variant="outlined" className="project-card" sx={{ cursor: 'pointer' }}>
                                    <CardActionArea href={"http://localhost:3000/workzone/coordinator/projectinit/" + projectList['projectId']}>
                                        <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Box
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'left',
                                                    width: '5%',
                                                    backgroundColor: 'rgb(5 161 189)'
                                                }}
                                            ></Box>
                                            <Box style={{ display: 'flex', justifyContent: 'left', width: '70%', paddingLeft: '70px' }}>
                                                <Stack>
                                                    <Typography
                                                        variant="h3"
                                                        component="p"
                                                        fontSize="1.5vw"
                                                        paddingTop={'15px'}
                                                        paddingBottom={'15px'}
                                                    >
                                                        {projectList['projectName']}
                                                    </Typography>
                                                    <Typography variant="p" component="p" fontSize="0.8vw" paddingBottom={'6px'}>
                                                        {projectList['description']}
                                                    </Typography>
                                                    <Typography variant="h4" component="p" fontSize="1.0vw" paddingBottom={'15px'}>
                                                        Due Date:{projectList['estendDate'].substr(0, 10)}
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box style={{ display: 'flex', justifyContent: 'center', width: '60%', top: '50%' }}>
                                                <div style={{ width: '38%' }}>
                                                    <DoughtChart chartData={userData} percentage={projectList['percent']} />
                                                </div>
                                            </Box>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </ListItem>
                        );
                    })}
                </List>
            </Paper>
        </React.Fragment >
    );
};

export default LeaveHistoryTable;
