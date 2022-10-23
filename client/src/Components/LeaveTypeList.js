import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import leaveimg from './../assets/images/leaves.png'

const LeaveTypes = () => {
    return ( 
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
                    <Avatar alt="Travis Howard" src={leaveimg} />
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
                    <Avatar alt="Cindy Baker" src={leaveimg} />
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
                            Maximum up to 7 to 17 Weeks per year
                        </Typography>
                        {' — From taking care of the newborn to recovering from the delivery, maternity leave is an important time for new mothers.  '}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={leaveimg} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Sabbatical leave"
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
                        {' — Simply put, sabbatical leaves are “a break from work” where employees can pursue interests they have or take time off for physical and mental health reasons. '}
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
                            Maximum up to 7 to 17 Weeks per year
                        </Typography>
                        {' — From taking care of the newborn to recovering from the delivery, maternity leave is an important time for new mothers.  '}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>
        </>
     );
}
 
export default LeaveTypes;