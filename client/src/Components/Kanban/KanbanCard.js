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
			statepop:false,
			
        };
		this.delete = this.delete.bind(this);
    }

    addworkreport() {
        console.log(event.target.value);
        const id = event.target.value;

        axios
            .post('http://localhost:5000/api/project/addworkReport', {
                subacitivityId: id
            })
            .then((response) => {
                console.log(response.data);
            });
    }
    delete() {
       
console.log("DELETE")
		this.setState({ statepop: true });
    }

    render() {
        const cardStyle = {
            backgroundColor: '#fff',
            paddingLeft: '0px',
            border: '0.5px solid #949391',
            paddingTop: '5px',
            paddingBottom: '5px',
            marginLeft: '0px',
            marginRight: '5px',
            marginBottom: '5px',
            paddingLeft: '5px',
            borderRadius: '10px',
            textAlign: 'left',
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 0px'
        };

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
                        <h4>{this.props.project.subActName}</h4>
                    </div>
                    {this.props.project.project_stage == 3 && (
                        <Button onClick={this.addworkreport} value={this.props.project.subActivityId}>
                            Add to work report
                        </Button>
                    )}
                    {this.props.project.project_stage == 1 && (
                        <Button onClick={this.delete} value={this.props.project.subActivityId}>
                            Delete
                        </Button>
                    )}
                    {this.state.collapsed ? null : (
                        <div>
                            <strong>Description: </strong>
                            {this.props.project.description}
                            <br />
                        </div>
                    )}
                    <div
                        style={{ width: '100%' }}
                        onClick={(e) => {
                            this.setState({ collapsed: !this.state.collapsed });
                        }}
                    >
                        {this.state.collapsed ? String.fromCharCode('9660') : String.fromCharCode('9650')}
                    </div>
                </div>
                <div>
                    
                    <Dialog
                        open={false}
                        // onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous location data to Google, even when no
                                apps are running.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          
                        </DialogActions>
                    </Dialog>
                </div>
            </>
        );
    }
}

export default KanbanCard;
