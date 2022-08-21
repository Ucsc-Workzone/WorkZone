
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import CircleIcon from '@mui/icons-material/Circle';

import Avatar from '@mui/material/Avatar';
const picArray = [
    [1,'Malithi Perera', 'member1.jpg','Team Leader'],
    [2,'Bimsara Kulasekara', 'member2.jpg','member'],
    [3,'Pamodha Mahagamage', 'member3.jpg','member'],
    [3,'Hiruni Guruge', 'member6.jpg','member'],
    [3,'Kavindu Galagedara', 'member4.jpg','member'],
    [3,'Dulanjana Weerasigne', 'member5.jpg','member'],
    [3,'Pamodya Ranaweera', 'member7.jpg','member']
];
const heading={
    paddingLeft:'10px'
}
const TeamMember = () => {
    return ( 
        <>
         <List sx={{ width: '100%', maxWidth: 580, bgcolor: 'background.paper' }}>
         <h3 style={heading}>Team members</h3>
                {picArray.map((user) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={require(`../assets/images/Profile/${user[2]}`)} >B</Avatar>
                        </ListItemAvatar>
                        
                        <ListItemText primary={user[1]} />
                        {user[3]=='member' &&
                            <Chip  label={user[3]} variant="outlined" style={{color:'green'}} />
                        }
                          {user[3]=='Team Leader' &&
                            <Chip  label={user[3]} style={{color:'primary'}}  color="primary"/>
                        }
                        
                    </ListItem>
                ))}
            </List>
        </>
     );
}
 
export default TeamMember;