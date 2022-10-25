import KanbanCard from './KanbanCard';
import SetCard from './setCard';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Divider, TextField, IconButton, Stack, Chip } from '@mui/material';
import './styles.css';
import { IconPlus } from '@tabler/icons';
import dayjs from 'dayjs';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { IconUser, IconCalendarStats } from '@tabler/icons';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// or for Day.js
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// or for Luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// or for Moment.js
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const KanbanColumn = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [searchParams, setSearchParams] = useSearchParams();

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [placement2, setPlacement2] = React.useState();
    const [placement1, setPlacement1] = React.useState();
    const [projectList, setProjectList] = useState([]);
    const [member, setMember] = useState('Assign a member');
    const [valueweight, setValueweight] = React.useState('High');
    const { projectid } = useParams();
    useEffect(() => {
        getCardData();
    }, []);
    const getCardData = () => {
        const proid = window.location.href.split('/')[6]

        axios
            .post('http://localhost:5000/api/project/getProjectData', {
                center_id: 1,
                project_id: projectid
            })
            .then((response) => {
                console.log(response.data);
                setProjectList(response.data);
            });
    };
    const handlechangemember = (e) => {
        console.log(e.target.innerHTML);
        setMember(e.target.innerHTML);
    };
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen2((prev) => placement2 !== newPlacement || !prev);
        setPlacement2(newPlacement);
    };
    const handleClicknew = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen1((prev) => placement1 !== newPlacement || !prev);
        setPlacement1(newPlacement);
        // setValue1(newPlacement)
    };

    const [value, setValue] = React.useState(dayjs('2022-10-26T21:11:54'));
    const [value1, setValue1] = React.useState('2022-10-26');
    const [set1, setSet1] = useState(false);
    const handleChange = (e) => {
        console.log(e.$d);
        setValue1(e.$d);
    };

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.title
    });

    const cardStyle = {
        backgroundColor: '#E3F2FD',

        padding: '20px',
        marginLeft: '0px',
        marginRight: '5px',
        marginBottom: '5px',
        borderRadius: '10px',
        textAlign: 'left'
    };

    const generateKanbanCards = () => {
        return projectList.slice(0).map((project) => {
            return (
                <KanbanCard
                    project={project}
                    key={project['activityId']}
                    weight={project['weight']}
                    activityName={project['activityName']}
                    Date={project['estendDate'].substring(0,10)}
                    assignMember={project['activityName']}
                    description={project['description']}
                    onDragEnd={project.onDragEnd}
                />
            );
        });
    };
    const addCard = () => {
        console.log('Malithi');
        setOpen(true);
    };
    const closepopUp = () => {
        setOpen(false);
    };

    const saveCard = () => {
        const taskName = document.getElementById('outlined-textarea-task').value;
        const taskDes = document.getElementById('outlined-textarea-des').value;
        const member = document.getElementById('filter-demo').value;
        
        console.log(value)
     
        
        console.log(valueweight)
        axios
            .post('http://localhost:5000/api/project/saveCard', {
                taskName: taskName,
                description: taskDes,
                project_id: projectid,
                weight:valueweight,
                estend:value,
                member:5

            })
            .then((response) => {
                console.log(response.data);
                if (true) {
                    setOpen(false);
                    getCardData();
                }
                // const projectid = response.data['LAST_INSERT_ID()'];
                // navigate('/coordinator/projectinit/' + `${projectid}`)
            });
        console.log(taskName);
    };

    const handleChangeweigh=(event)=>{
        setValueweight(event.target.value)
    }
    const columnStyle = {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: '0px',
        marginBottom: '20px',
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '20px',
        width: '100%',
        borderRadius: '50px',

        backgroundColor: '#fffff'
    };

    return (
        <div
            style={columnStyle}
            onDragEnter={(e) => {
                setState({ mouseIsHovering: true });
                onDragEnter(e, this.props.stage);
            }}
            onDragExit={(e) => {
                this.setState({ mouseIsHovering: false });
            }}
        >
            <div className="divCon">
                <div>
                    <h4 className="card-contetnt">{board[0].name}</h4>
                </div>

                <div>
                    <Button className="buttonAdd" onClick={addCard}>
                        <IconPlus></IconPlus>Add Task
                    </Button>
                </div>
            </div>

            <Divider textAlign="left" className="devide1"></Divider>

            <br></br>
            {open && (
                <div className="popUpadd">
                    <div style={cardStyle} draggable={true}>
                        <div className="card-contetnt">
                            <TextField id="outlined-textarea-task" label="Task" placeholder="Task" multiline />
                            <TextField
                                id="outlined-textarea-des"
                                label="Description"
                                placeholder="Description"
                                multiline
                                className="desCard"
                            />
                        </div>

                        <div class="datex">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Due Date"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>

                        <div className="memberAssign">
                            <Autocomplete
                                id="filter-demo"
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                filterOptions={filterOptions}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Assign Memeber" id="filter-demo-d" value={(option)=>option.id}/>}
                            />
                        </div>
                        <div>
                            <FormControl  >
                                <FormLabel id="demo-row-radio-buttons-group-label">Task Weight</FormLabel>
                                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
                                 value={valueweight}
                                 onChange={handleChangeweigh}
                                
                                >
                                    <FormControlLabel value="High" control={<Radio />} label="High" />
                                    <FormControlLabel value="Med" control={<Radio />} label="Medium" />
                                    <FormControlLabel value="Low" control={<Radio />} label="Low" />
                                   
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="button-contetnt">
                            <Button variant="contained" className="buttonclass" onClick={saveCard}>
                                Save
                            </Button>
                            <Button variant="outlined" className="buttonclass" onClick={closepopUp}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {generateKanbanCards()}
            <br />
        </div>
    );
};

export default KanbanColumn;

const board = [{ name: 'Work Assign', stage: 1 }];
const top100Films = [
    { title: 'Malithi Perera', id: 5 },
    { title: 'Bimsara Kulasekara', id: 6 },
    { title: 'Ravin Jayarathne', id: 7 },
    { title: 'Ravin Eranga', id: 8 },
    { title: 'Werath Ravin', id: 9 },
    { title: 'Wihan Bandara', id: 10 },
    { title: 'Ravin Gamage', id: 11 }
];
