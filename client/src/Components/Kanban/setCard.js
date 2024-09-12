import { Chip, TextField, Stack, IconButton, Avatar } from '@mui/material';

import * as React from 'react';
import dayjs from 'dayjs';
import './styles.css';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { IconUser, IconCalendarStats } from '@tabler/icons';
import { useState } from 'react';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

const setCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const [placement1, setPlacement1] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleClicknew = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen1((prev) => placement1 !== newPlacement || !prev);
        setPlacement1(newPlacement);
    };
    const handleclosenew= (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen1((prev) => placement1 !== newPlacement || !prev);
        setPlacement1(newPlacement);
    };
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [set1, setSet1] = useState(false);
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const renderDate = () => {
        setSet1(true);
    };

	const closeCard=()=>{
		
	}
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.title
    });

    const cardStyle = {
        backgroundColor: '#fff',
        paddingLeft: '0px',
        paddingTop: '5px',
        paddingBottom: '5px',
        marginLeft: '0px',
        marginRight: '5px',
        marginBottom: '5px',
        borderRadius: '10px',
        textAlign: 'left'
    };

    return (
        <div style={cardStyle} draggable={true}>
            <div className="card-contetnt">
                <TextField id="outlined-textarea" label="Task" placeholder="Task" multiline />
                <TextField id="outlined-textarea" label="Description" placeholder="Description" multiline className="desCard" />
            </div>
            <div className="scheduleCon">
                <div className="filed">
                    <IconButton className="calenIcon" onClick={handleClicknew('bottom-start')}>
                        {' '}
                        <IconCalendarStats></IconCalendarStats>
                    </IconButton>
                    <Popper open={open1} anchorEl={anchorEl} placement={placement1} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack className="dueDate">
                                            <DesktopDatePicker
                                                label="Date desktop"
                                                inputFormat="MM/DD/YYYY"
                                                value={value}
                                                onChange={handleChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>

                <div className="filed">
                    <IconButton className="userIcon" onClick={handleClick('bottom-start')}>
                        {' '}
                        <IconUser></IconUser>
                    </IconButton>
                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <div>
                                        {' '}
                                        <Autocomplete
                                            id="filter-demo"
                                            options={top100Films}
                                            getOptionLabel={(option) => option.title}
                                            filterOptions={filterOptions}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Custom filter" id="filter-demo-d" />}
                                        />
                                    </div>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            </div>

            <div className="button-contetnt">
				<Button variant="contained" className='buttonclass'>Save</Button>
				<Button variant="outlined" className='buttonclass' onClick={closeCard}>Cancel</Button>
			</div>
        </div>
    );
};

export default setCard;
const top100Films = [
    { title: 'Eshan Herath', year: 1994 },
    { title: 'Thara Sayuru', year: 1972 },
    { title: 'Ravin Jayarathne', year: 1974 },
    { title: 'Ravin Eranga', year: 2008 },
    { title: 'Werath Ravin', year: 1957 },
    { title: 'Wihan Bandara', year: 1993 },
    { title: 'Ravin Gamage', year: 1994 }
];
