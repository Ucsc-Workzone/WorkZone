import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const LeaveTypes = () => {
    return ( 
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="leave_icon"  src="../assets/images/leaves.png" />
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
                            Maximum 15 days per year
                        </Typography>
                        {" — Sick leave is time off given by the company to allow employees to recover from an illness and take care of their health."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="../assets/images/leaves.png" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Casual leave"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Maximum up to 8 to 15 per year
                        </Typography>
                        {" — Casual leave is taken by an employee for travel, vacation, rest, and family events."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="../assets/images/leaves.png" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Bereavement leave"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Maximum up to 3 to 7 per year
                        </Typography>
                        {' — Losing a loved one is an unavoidable situation and in such events, employees take sudden leave. '}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>
        </>
     );
}
 
export default LeaveTypes;