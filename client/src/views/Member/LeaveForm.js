
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


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const theme = createTheme();

export default function LeaveForm() {
    const [age, setAge] = React.useState('');

    const handleChangeA = (event) => {
        setAge(event.target.value);
    };
    const [value1, setValue1] = React.useState(new Date());
    const [value, setValue] = React.useState('one');
    const [render,setRender]=React.useState(true);

    const handleChangeType = (event) => {
        setValue(event.target.value);
        if(event.target.value=='short')
        {
            setRender(false)
        }
        else if(event.target.value=='long'){
            setRender(false)
        }
        else{
            setRender(true)
        }
        console.log(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        });
    };

    return (
        <ThemeProvider theme={theme}>
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
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
                            {render &&
                                <Grid item xs={12}>
                                    <TextField
                                        id="date"
                                        label="Date"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        sx={{ width: 220 }}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Grid>
                            }
                            {!render &&
                                <>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="date"
                                        label="Date"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        sx={{ width: 220 }}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                   
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    id="date"
                                    label="Date"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    sx={{ width: 220 }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                               
                            </Grid></>
                                
                            }

                            <Grid item xs={12}>
                                <TextField required fullWidth id="email" label="Reason" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-filled-label">Memeber Assign</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value=""
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>M.S Herath</MenuItem>
                                        <MenuItem value={20}>M.C Perera</MenuItem>
                                        <MenuItem value={30}>M.N. Dias</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}></Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
