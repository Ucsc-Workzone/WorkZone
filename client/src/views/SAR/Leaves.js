import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import './styles/Leaves.css';

import Calender from 'Components/Calender';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import OnlineUser from 'Components/Onlineusers';
import HeaderCounter from 'Components/HeaderCounter3';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height:'3000px',
    color: theme.palette.text.secondary
}));


const HeadList = {
    head1:"Pending",
    head2:"Approved",
    head3:"Rejected"
}
var CountList = {
    count1:5,
    count2:7,
    count3:3
}

const SARLeaves = () => {
    return (
        <><Box sx={{ flexGrow: 1 }}>
            <div className="main-container">
                <div className="container-left">
                    <Typography variant="h3" component="h4" className="" colour="blue" >AUGUST</Typography>
                    <HeaderCounter headlist={HeadList} countlist={CountList} />
                    <div className="">
                        {/* <Annoucements /> */}
                    </div>
                </div>

                <div className="container-right">
                    <div className="calender-container">
                        <Calender />
                    </div>
                    <div className="onlineuser-container">
                        <Typography variant="h3" component="h4" className="">
                            Center Members
                        </Typography>
                        <OnlineUser />
                    </div>
                </div>
            </div>
            </Box>
        </>
        
    );
};

export default SARLeaves;

