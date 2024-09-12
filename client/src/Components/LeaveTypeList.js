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
                    primary="Annual Leaves"
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
                        {" — The employee is permitted to 14 days of annual leave competed with the full salary for each concluded year of serivce.Hence,employees are not entitled to annual leave on the first year of employement."}
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
                            Most of the time complete day as a holiday on Satrday
                        </Typography>
                        {" — An employee who works for 28hours or more in a given week is eligible for one and half days as weekly holiday with full remuneration, which should be granted on such week or the week immediately succeeding."}
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
                    primary="Mercantile Holidays"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            
                        </Typography>
                        {' Public holidays with pay for the shop and office employees '}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                
            </List>
        </>
     );
}
 
export default LeaveTypes;