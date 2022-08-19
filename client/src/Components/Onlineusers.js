import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
const OnlineUser = () => {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>M</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Malithi Perera" secondary="online" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>B</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Bimsara Kulasekara" secondary="online" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>h1</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hiruni Guruge" secondary="online" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>P</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Pamodha Mahagamage" secondary="online" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>k</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Kavindu Galagedara" secondary="online" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>D</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Dulanjana Weerasinghe" secondary="online" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>M</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Manoj Hertah" secondary="online" />
                </ListItem>
            </List>
        </>
    );
};

export default OnlineUser;
