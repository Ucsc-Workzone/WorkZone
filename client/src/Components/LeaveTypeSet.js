import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import leaveimg from './../assets/images/next.png'

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const LeaveTypeSet = () => {

    const [ancount, setAnn] = React.useState(0);
    const [wkcount, setWeek] = React.useState(0);
    const [skcount, setSick] = React.useState(0);
    const [matcount, setMat] = React.useState(0);
    const [mercount, setMer] = React.useState(0);

        
    function setdata(data){
        setAnn(data.annual);
        setWeek(data.weekly);
        setSick(data.sick);
        setMat(data.maternity);
        setMer(data.mercantile);

    }
    useEffect(() => {
        configleave();
    }, []);

    const configleave = () => {
        axios
            .post('http://localhost:5000/api/Leave/getConfig', {
                center_id: 1
            })
            .then((response) => {
                console.log(response.data);
                setdata(response.data[0]);
            });
    };


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
                                {ancount} days per year
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
                        {wkcount==1 && <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Half Day
                        </Typography>}
                        {wkcount==2 && <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Full Day
                        </Typography>}

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
                            {skcount} days per year
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
                            {matcount} Weeks per year
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
                            { mercount == 0 && 
                                 <Typography
                                 sx={{ display: 'inline' }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                             >
                                 Not Allowed
                             </Typography>
                            }
                             { mercount== 1 && 
                                 <Typography
                                 sx={{ display: 'inline' }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                             >
                                Allowed
                             </Typography>
                            }
                       
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