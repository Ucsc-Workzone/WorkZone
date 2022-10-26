import { Button, Chip } from '@mui/material';
import React from 'react';
import './styles.css';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
class KanbanCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            statepop: false
        };
        this.delete = this.delete.bind(this);
       
    }
//     componentDidMount(){
// let input=document.getElementById('upload-value').value;

//     }

    addworkreport() {
        const id = event.target.value;
        console.log(id)
        const userid = localStorage.getItem('userid');
        axios
            .post('http://localhost:5000/api/project/checkpendings', {
                userid: userid
            })
            .then((response) => {
                console.log("Length",response.data.length);
                if ((response.data = 1)) {
                    axios
                        .post('http://localhost:5000/api/project/addToReport', {
                            userid: userid,
                            actId:id
                        })
                        .then((response) => {
                            
                        });
               
                } else {
                    // axios
                    //     .post('http://localhost:5000/api/project/createReport', {
                    //         userid: userid
                    //     })
                    //     .then((response) => {
                    //         console.log(response.data);
                    //     });
                    alert('You Have already have a work report to submit');
                
                }
            });
    }
    delete(e) {
        const subActivityId=e.target.value;
        this.setState({ statepop: true });
       // alert(e.target.value)
        axios
        .post('http://localhost:5000/api/project/deleteActivity', {
            sunActId: subActivityId
        })
        .then((response) => {
            console.log(response.data);
        });
        
        
    }

    render() {
        const cardStyle = {
            backgroundColor: '#fff',
            paddingLeft: '0px',
            border: '0.5px solid #E8E8E8',
            paddingTop: '20px',
            paddingBottom: '20px',
            marginLeft: '0px',
            marginRight: '5px',
            marginBottom: '5px',
            paddingLeft: '20px',
            
            borderRadius: '10px',
            textAlign: 'left',
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 0px'
        };
        const buttonStyle = {
            // marginLeft: '10px',
            marginBottom:'10px',
            width:'300px'
        };
const buttonStyle2={
    // marginRight: '10px',
   
}
        return (
            <>
                <div
                    style={cardStyle}
                    draggable={true}
                    onDragEnd={(e) => {
                        this.props.onDragEnd(e, this.props.project);
                    }}
                >
                    {this.props.project.weight == 'High' && <Chip label={this.props.project.weight} color="success" className="chipcon" />}
                    {this.props.project.weight == 'Med' && <Chip label={this.props.project.weight} color="primary" className="chipcon1" />}
                    {this.props.project.weight == 'Low' && <Chip label={this.props.project.weight} color="warning" className="chipcon2" />}
                    <div className="card-contetnt">
                        <h4>Task:{this.props.project.subActName}</h4>
                    </div>
                    <div className="card-contetnt-des">
                        <h4>Description:{this.props.project.description}</h4>
                    </div>
                    {this.props.project.project_stage == 3 && (
                        <Button variant="outlined" component="label" style={buttonStyle}>
                            Upload Proof
                            <input  accept="image/*" multiple type="file"id='upload-value' />
                        </Button>
                    )}
                    {this.props.project.project_stage == 3 && (
                        <Button onClick={this.addworkreport} value={this.props.project.subActivityId} variant="contained">
                            Add to work report
                        </Button>
                    )}
                    
                    {this.props.project.project_stage == 1 && (
                        <Button onClick={this.delete} value={this.props.project.subActivityId} variant='outlined' color='primary' style={buttonStyle2}>
                            Edit
                        </Button>
                        
                    )}
                    {this.props.project.project_stage == 1 && (
                        <Button onClick={this.delete} value={this.props.project.subActivityId} variant='outlined' color='error'>
                            Delete
                        </Button>
                        
                    )}
                    {/* {this.state.collapsed ? null : (
                        <div>
                            <strong>Description: </strong>
                            {this.props.project.description}
                            <br />
                        </div>
                    )} */}
                    {/* <div
                        style={{ width: '100%' }}
                        onClick={(e) => {
                            this.setState({ collapsed: !this.state.collapsed });
                        }}
                    >
                        {this.state.collapsed ? String.fromCharCode('9660') : String.fromCharCode('9650')}
                    </div> */}
                </div>
                <div>
                    <Dialog
                        open={this.statepop}
                        // onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Do you Want to delete this task
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions></DialogActions>
                    </Dialog>
                </div>
            </>
        );
    }
}

export default KanbanCard;
