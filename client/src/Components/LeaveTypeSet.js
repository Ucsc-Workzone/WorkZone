import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import leaveimg from './../assets/images/next.png'

const LeaveTypeSet = () => {
    return ( 
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="leave_icon"  src={leaveimg} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Annual Leaves"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline',textAlign: 'right' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                15 days per year
                            </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="leave_icon"  src={leaveimg} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Weekly Leaves"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Full Day
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="leave_icon"  src={leaveimg} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Sick Leave"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            15 days per year
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />            
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={leaveimg} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Maternity leave"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            10 Weeks per year
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={leaveimg} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Mercantile Holidays"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Allowed
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                
            </List>
        </>
     );
}
 
export default LeaveTypeSet;