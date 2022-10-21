import KanbanCard from './KanbanCard';
import SetCard from './setCard';
import React from 'react';
import { useState,useEffect } from 'react';
import { Button, Divider, TextField, IconButton, Stack, Chip } from '@mui/material';
import './styles.css';
import { IconPlus } from '@tabler/icons';
import dayjs from 'dayjs';
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
import { useLocation } from "react-router-dom";
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';


const KanbanColumn = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [searchParams, setSearchParams] = useSearchParams();
    
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [placement2, setPlacement2] = React.useState();
    const [placement1, setPlacement1] = React.useState();
const [projectList,setProjectList]=useState([]);
    const [member, setMember] = useState('Assign a member');
    const {projectid}=useParams();
    useEffect(()=>{
       
       getCardData();
    },[])
    const getCardData=()=>{
        axios
        .post('http://localhost:5000/api/project/getProjectData', {
            center_id: 1,
            project_id:projectid,
           
        })
        .then((response) => {
            console.log(response.data);
            setProjectList(response.data)
            // const projectid = response.data['LAST_INSERT_ID()'];
            // navigate('/coordinator/projectinit/' + `${projectid}`)


        });

    }
    const handlechangemember = (e) => {
        console.log(e.target.innerHTML)
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

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [value1, setValue1] = React.useState('2014-08-18');
    const [set1, setSet1] = useState(false);
    const handleChange = (e) => {
        console.log(e.$d)
        setValue1(e.$d);
    };

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

    const generateKanbanCards = () => {
        return projectList.slice(0).map((project) => {
            return <KanbanCard project={project} key={project['activityId']} weight={project['weight']} activityName={project['activityName']} description={project['description']} onDragEnd={project.onDragEnd} />;
        });
    };
    const addCard = () => {
        console.log('Malithi');
        setOpen(true);
    };
    const closepopUp = () => {
        setOpen(false);
    };

    const saveCard=()=>{
  
        const taskName=document.getElementById('outlined-textarea-task').value;
        const taskDes=document.getElementById('outlined-textarea-des').value;
        axios
        .post('http://localhost:5000/api/project/saveCard', {
           taskName:taskName,
           taskDes:taskDes,
           project_id:51
           
        })
        .then((response) => {
            console.log(response.data);
           if(true){
            setOpen(false)
            getCardData();
           }
            // const projectid = response.data['LAST_INSERT_ID()'];
            // navigate('/coordinator/projectinit/' + `${projectid}`)


        });
console.log(taskName)
    }

    const columnStyle = {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: '5px',
        marginBottom: '5px',
        paddingLeft: '10px',
        paddingTop: '0px',
        width: '100%',
        borderRadius: '10px',

        backgroundColor: '#f0eeee'
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
                            <TextField id="outlined-textarea-des" label="Description" placeholder="Description" multiline className="desCard" />
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
const top100Films = [
    { title: 'Eshan Herath', year: 1994 },
    { title: 'Thara Sayuru', year: 1972 },
    { title: 'Ravin Jayarathne', year: 1974 },
    { title: 'Ravin Eranga', year: 2008 },
    { title: 'Werath Ravin', year: 1957 },
    { title: 'Wihan Bandara', year: 1993 },
    { title: 'Ravin Gamage', year: 1994 }
];


const board = [{ name: 'Work Assign', stage: 1 }];
