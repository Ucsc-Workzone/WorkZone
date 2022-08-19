import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {Typography } from '@mui/material';

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
                    <ListItemText primary={<Typography type="body2" style={{ color: '#000000' }}>Malithi Perera</Typography>} secondary={<Typography type="body3" style={{ color: '#13d013' }}>online</Typography>}  />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>B</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography type="body2" style={{ color: '#000000' }}>Bimsara Kulasekara</Typography>} secondary={<Typography type="body3" style={{ color: '#13d013' }}>online</Typography>} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>h1</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography type="body2" style={{ color: '#000000' }}>Hiruni Guruge</Typography>} secondary={<Typography type="body3" style={{ color: '#13d013' }}>online</Typography>} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>P</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography type="body2" style={{ color: '#000000' }}>Pamodha Mahagamage</Typography>} secondary={<Typography type="body3" style={{ color: '#13d013' }}>online</Typography>} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>k</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography type="body2" style={{ color: '#000000' }}>Kavindu Galagedara</Typography>} secondary={<Typography type="body3" style={{ color: '#13d013' }}>online</Typography>} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>D</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography type="body2" style={{ color: '#000000' }}>Dulanajana Weerasinghe</Typography>} secondary={<Typography type="body3" style={{ color: '#13d013' }}>online</Typography>}/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>M</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography type="body2" style={{ color: '#000000' }}>Manoj Herath</Typography>} secondary={<Typography type="body3" style={{ color: '#13d013' }}>online</Typography>} />
                </ListItem>
            </List>
        </>
    );
};

export default OnlineUser;
