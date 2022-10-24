import * as React from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import { useState } from 'react';

const theme = createTheme();

export default function ProjectForm() {
    const navigate = useNavigate()
    const [value, settypeValue] = React.useState('one');
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    const [type, setType] = useState(1);
    const [date, setDate] = useState('');
    const handleChangeType = (event) => {
        settypeValue(event.target.value);
        if (event.target.value == 'short') {
            setRender(false);
        } else if (event.target.value == 'long') {
            setRender(false);
        } else {
            setRender(true);
        }
        console.log(event.target.value);
    };

    const [picdate, setValue] = React.useState(new Date());

    const handleDateChange = (newValue) => {
        setValue(newValue);
    };

    const createProject = () => {
        axios
            .post('http://localhost:5000/api/project/create', {
                center_id: 1,
                project_name: name,
                team: type,
                description: des,
                estend_date: picdate
            })
            .then((response) => {
                console.log(response.data);
                const projectid = response.data['LAST_INSERT_ID()'];
                navigate('/coordinator/projectinit/' + projectid)


            });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        });
    };
    const changeName = (event) => {
        setName(event.target.value);
    };
    const changedes = (event) => {
        setDes(event.target.value);
    };
    const changetype = (event) => {
        setType(event.target.value);
    };
    const changedate = (event) => {
        setDate(event.target.value);
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" backgroundColor="lightblue">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        style={{ width: '100%', textAlign: 'center', color: 'black', fontWeight: '600' }}
                    >
                        Project Create Form
                    </Typography>

                    <Divider />
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} sx={{ width: '100', align: 'center' }}>
                                <TextField
                                    autoComplete="given-name"
                                    name="projectName"
                                    required
                                    fullWidth
                                    id="projectName"
                                    label="Project Name"
                                    autoFocus
                                    value={name}
                                    onChange={changeName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Project Type</FormLabel>
                                <RadioGroup
                                    required
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    style={{ justifyContent: 'center' }}
                                    value={type}
                                    onChange={changetype}
                                >
                                    <FormControlLabel value={1} control={<Radio />} label="Individual" />
                                    <FormControlLabel value={2} control={<Radio />} label="Group" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12} sm={12} sx={{ justifyContent: 'center' }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        disablePast
                                        label="Approximate Due Date"
                                        openTo="day"
                                        views={['year', 'month', 'day']}
                                        value={picdate}
                                        style={{ margin: '0' }}
                                        onChange={handleDateChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="project-description"
                                    label="Description"
                                    name="description"
                                    autoComplete="description"
                                    row={4}
                                    value={des}
                                    onChange={changedes}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button onClick={createProject}>Create</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}