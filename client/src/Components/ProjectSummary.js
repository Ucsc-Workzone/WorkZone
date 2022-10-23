import { Chip } from '@mui/material';
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
import Image from '../../src/assets/images/Profile/member1.jpg';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState } from 'react';

const ProjectSummary = () => {
  const [proSummary,setProsummary]=useState([]);
  const { projectid } = useParams();
  const projectName="E-Commerce"
    useEffect(() => {
      const projectName="E-Commerce"
//projectSummary();
    });
    const projectSummary = () => {
      axios
      .post('http://localhost:5000/api/project/projectSummary', {
         
          project_id: projectid
      })
      .then((response) => {
          console.log(response.data);
          const projectName=response.data[0]['projectName']
          setProsummary(response.data)
          console.log(proSummary)
         
      });
    };
    return (
        <>
            <div className="main-conatiner">
                <List className="listItem">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <DevicesIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Project Name" secondary={projectName} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EventAvailableIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Due Date" secondary="Sep 7, 2022" />
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
                        <ListItemAvatar>
                            <Avatar src={Image}>{/* <GroupAddIcon /> */}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Team Leader" secondary="Malithi Perera" />
                    </ListItem>
                    {/* <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GroupAddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="No of Members" secondary="5" />
      </ListItem> */}
                </List>
            </div>
        </>
    );
};

export default ProjectSummary;
