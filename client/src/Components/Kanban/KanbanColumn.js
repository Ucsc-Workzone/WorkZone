import KanbanCard from './KanbanCard';
import React from 'react';
import { Divider, Button } from '@mui/material';
import { IconPlus } from '@tabler/icons';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/system';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
// import Button from '@mui/material';

// function test(){
//     const {proid}=useParams();
//     console.log(proid)
// }
// test();
class KanbanColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mouseIsHovering: false, addnewCard: false };
        this.changeState = this.changeState.bind(this);
        this.closeCard = this.closeCard.bind(this);
        this.saveCard = this.saveCard.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.state = { mouseIsHovering: false };
    }

    generateKanbanCards() {
        return this.props.projects.slice(0).map((project) => {
            return <KanbanCard project={project} key={project.name} weigh={project.weigh} onDragEnd={this.props.onDragEnd} />;
        });
    }

    changeDate() {}
    addCard() {
        console.log('Malithi');

        return <KanbanCard project="New" key="new" onDragEnd={1} />;
    }

    changeState(e) {
        console.log('Maliii');
        // this.setState({ testState:true });
        this.setState({ addnewCard: true });
        const studentId = window.location.href.split('/')[6];
        console.log(studentId);
    }
    saveCard() {
        const proid = window.location.href.split('/')[6]
        const actid = window.location.href.split('/')[7]
        const title = document.getElementById('outlined-textarea-task').value;
        const des = document.getElementById('outlined-textarea-des').value;
        if (title.length == 0) {
            alert(proid);
        } else {
            axios
                .post('http://localhost:5000/api/project/saveCardMember', {
                    taskName: title,
                    taskDes: des,
                    project_id: proid,
                    activity_id: actid,
                    weight: 'High'
                })
                .then((response) => {
                    console.log(response.data);
                    this.getData();
                    window.location.reload();
                });
        }
    }
    getData(e) {
        const sendPutRequest = async () => {
            try {
                const proid = window.location.href.split('/')[6]
                const actId = window.location.href.split('/')[7]
                const resp = await axios.post('http://localhost:5000/api/project/membergetCards', {
                    center_id: 1,
                    project_id:proid ,
                    activity_id: actId
                });
                console.log(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        sendPutRequest();
    }
    closeCard(e) {
        console.log('jjj');
        this.setState({ addnewCard: false });
        const studentId = window.location.href.split('/')[6];
        console.log(studentId);
        // this.setState({ addnewCard: false });
    }
    render() {
        const columnStyle = {
            display: 'inline-block',
            verticalAlign: 'top',
            marginRight: '5px',
            marginBottom: '5px',
            paddingLeft: '10px',
            paddingTop: '0px',
            width: '32%',
            borderRadius:'10px',

            backgroundColor: this.state.mouseIsHovering ? '#fff' : '#fff'
        };
        const cardStyle = {
            backgroundColor: '#fff',

            padding: '20px',
            marginLeft: '0px',
            marginRight: '5px',
            marginBottom: '5px',
            borderRadius: '10px',
            textAlign: 'left'
        };
        const cardContent = {
            width: '100%',
            marginTop: '10px'
        };
        const buttonclass = {
            marginRight: '10px'
        };
        return (
            <div
                style={columnStyle}
                onDragEnter={(e) => {
                    this.setState({ mouseIsHovering: true });
                    this.props.onDragEnter(e, this.props.stage);
                }}
                onDragExit={(e) => {
                    this.setState({ mouseIsHovering: false });
                }}
            >
                <h4 className="card-contetnt">
                    {this.props.name} ({this.props.projects.length})
                </h4>

                {this.props.stage == 1 && <Divider textAlign="left" className="devide1"></Divider>}
                {this.props.stage == 2 && <Divider textAlign="left" className="devide2"></Divider>}
                {this.props.stage == 3 && <Divider textAlign="left" className="devide3"></Divider>}

                <br></br>
                {this.props.stage == 1 && (
                    <div className="divCon">
                        <div>{/* <h4 className="card-contetnt">{board[0].name}</h4> */}</div>

                        <div>
                            <Button className="buttonAdd" onClick={this.changeState}>
                                <IconPlus></IconPlus>Add Task
                            </Button>
                        </div>
                    </div>
                )}
                {this.state.addnewCard && (
                    <div className="popUpadd">
                        <div style={cardStyle} draggable={true}>
                            <div className="card-contetnt">
                                <TextField id="outlined-textarea-task" label="Task" placeholder="Task" multiline style={cardContent} />
                                <TextField
                                    id="outlined-textarea-des"
                                    label="Description"
                                    placeholder="Description"
                                    multiline
                                    className="desCard"
                                    style={cardContent}
                                />
                            </div>

                            <div class="datex" style={cardContent}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        disablePast
                                        label="Due Date"
                                        value={"2022-10-27"}
                                        onChange={this.changeDate}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Weight</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        sx={{ display: 'flex', width: '100%' }}
                                    >
                                        <Box sx={{ display: 'flex', width: '100%' }}>
                                            <FormControlLabel value="female" control={<Radio />} label="High" />
                                            <FormControlLabel value="male" control={<Radio />} label="Medium" />
                                            <FormControlLabel value="other" control={<Radio />} label="Low" />
                                        </Box>
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div className="button-contetnt" style={cardContent}>
                                <Button variant="contained" className="buttonclass" onClick={this.saveCard} style={buttonclass}>
                                    Save
                                </Button>
                                <Button variant="outlined" className="buttonclass" onClick={this.closeCard} style={buttonclass}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
                {this.generateKanbanCards()}
                <br />
            </div>
        );
    }
}
export default KanbanColumn;
