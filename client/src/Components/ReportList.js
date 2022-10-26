import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value
        })
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper
}));

const buttonContainer = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: '100%',
    padding: '10px',
    marginRight: '-20px'
};
const buttonCon = {
    marginLeft: '40px'
};
const buttonCon1 = {
    marginLeft: '40px'
};

export default function InteractiveList() {
    const userid = localStorage.getItem('userid');
    const [status, setStaus] = useState([]);
    const [activity,setActivity]=useState(false)
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        
        axios
            .post('http://localhost:5000/api/project/getworkreportmember', {
                userid: userid
            })
            .then((response) => {
               if(response.data.length==0){
setActivity(true)
               }
                console.log(response.data.length);
                setStaus(response.data);
              

            });
    };

    const submitWorkReport=()=>{
        const recordId=localStorage.getItem('recordId')
        axios
        .post('http://localhost:5000/api/project/submitreport', {
            recordId: recordId
        })
        .then((response) => {
           if(response.data.length==0){
setActivity(true)
           }
            console.log(response.data.length);
            setStaus(response.data);
            if(true){
                alert("Successfully Submited")
            }
          

        });

    }
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid item xs={12} md={6}>
                <Demo>
                    <List dense={dense}>
                        {status.map((data) => {
                            localStorage.setItem('recordId',data['reportId'])
                            return (
                                <>
                                    <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete" value={data['subActivityId']}>
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={data['subActName']} secondary={data['subActivityId']} />
                                        <ListItemText primary={data['attachment']} secondary={data['description']} />
                                    </ListItem>
                                    
                                </>
                            );
                        })}
                    </List>

                    <div style={buttonContainer}>
                        {/* <div style={buttonCon}>
                            {' '}
                            <Button variant="contained">View</Button>
                        </div> */}

                        <div style={buttonCon1}>
                            {' '}
                            {!activity &&
                             <Button variant="contained" color="success" onClick={submitWorkReport} >
                             Submit
                         </Button>

                            }
                            {activity &&
                             <Typography variant="h3" component="h2" className="" style={{ marginBottom: '20px', marginTop: '20px' }}>
                        No Activities to to submit
                          </Typography>

                            }
                           
                        </div>
                    </div>
                </Demo>
            </Grid>
        </Box>
    );
}
