import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import Avatar from '@mui/material/Avatar';
const picArray = [
    [1, 'Malithi Perera', 'member1.jpg', 'Team Leader'],
    [2, 'Bimsara Kulasekara', 'member2.jpg', 'member'],
    [3, 'Pamodha Mahagamage', 'member3.jpg', 'member'],
    [3, 'Hiruni Guruge', 'member6.jpg', 'member'],
    [3, 'Kavindu Galagedara', 'member4.jpg', 'member'],
    [3, 'Dulanjana Weerasigne', 'member5.jpg', 'member'],
    [3, 'Pamodya Ranaweera', 'member7.jpg', 'member']
];
const heading = {
    paddingLeft: '10px'
};
const AllUser = () => {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 580, bgcolor: 'background.paper' }}>
                <h3 style={heading}>All users</h3>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Users" inputProps={{ 'aria-label': 'Search users' }} />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </Paper>
                {picArray.map((user) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={require(`../assets/images/Profile/${user[2]}`)}>B</Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={user[1]} />
                        {/* {user[3] == 'member' && <Chip label={user[3]} variant="outlined" style={{ color: 'green' }} />}
                        {user[3] == 'Team Leader' && <Chip label={user[3]} style={{ color: 'primary' }} color="primary" />} */}
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default AllUser;
