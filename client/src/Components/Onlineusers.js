import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import user1 from '../assets/images/Profile/member1.jpg'
const picArray = [
    [1,'Malithi Perera', 'member1.jpg'],
    [2,'Bimsara Kulasekara', 'member2.jpg'],
    [3,'Pamodha Mahagamage', 'member3.jpg'],
    [3,'Hiruni Guruge', 'member6.jpg'],
    [3,'Kavindu Galagedara', 'member4.jpg'],
    [3,'Dulanjana Weerasigne', 'member5.jpg'],
    [3,'Pamodya Ranaweera', 'member7.jpg']
];
const OnlineUser = () => {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 580, bgcolor: 'background.paper' }}>
                {picArray.map((user) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={require(`../assets/images/Profile/${user[2]}`)} >B</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user[1]} secondary="online" />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default OnlineUser;
