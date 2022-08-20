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

const ProjectSummary = () => {
    return ( 
        <>
        <div className="main-conatiner">
        <List >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DevicesIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Project Name" secondary="Skelton mobile Application" />
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
    </List>
        </div>
        </>

     );
}
 
export default ProjectSummary;