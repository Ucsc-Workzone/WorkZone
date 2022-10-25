import { Chip } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import DevicesIcon from '@mui/icons-material/Devices';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import './styles/projectSummary.css';
import Image from '../../src/assets/images/Profile/member1.jpg'
import TaskSummary from "./TaskSummary";
import { useEffect } from "react";

import axios from "axios";
import { useState } from "react";
const ProjectSummary = () => {
  const [data,setData]=useState([]);
  const [state,setState]=useState(false);

  useEffect(()=>{

    sendPutRequest();
  },[])

  const sendPutRequest = async () => {
    const proid = window.location.href.split('/')[6];
    const actid = window.location.href.split('/')[7];
    try {
        const resp = await axios.post('http://localhost:5000/api/project/getsummarymember', {
            center_id: 1,
            project_id: proid,
            activity_id: actid
        });
        console.log(resp.data);
        setData(resp.data)
        setState(true)
    } catch (err) {
        // Handle Error Here
        console.error(err);
       
    }
};
sendPutRequest();
    return ( 
        <>
        {state &&
          <div className="main-conatiner">
        <List className="listItem">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DevicesIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Project Name" secondary={data[0]['projectName']} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EventAvailableIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Due Date" secondary={data[0]['estendDate'].substring(0,10)} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EventAvailableIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Task Name" secondary={data[0]['activityName']} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GroupAddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="No of Members" secondary="5" />
      </ListItem>
      <ListItem>
       <TaskSummary />
      </ListItem>
      
    </List>
        </div>
        }
        
        </>

     );
}
 
export default ProjectSummary;