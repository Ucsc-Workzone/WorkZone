import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import './styles/Dashboard.css';

import Calender from 'Components/Calender';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import OnlineUser from 'Components/Onlineusers';
import HeaderCounter from 'Components/HeaderCounter3';
import Annoucements from 'Components/RecentAnnouncements';
import PendingCounter from 'Components/PendingCounter';
import PendingList from 'Components/PendingList';
import UpcomingList from 'Components/UpcomingsList';
import Stack from '@mui/material/Stack';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));


const HeadList = {
    head1:"No. of Members",
    head2:"Ongoing Projects",
    head3:"Completed Projects"
}
var CountList = {
    count1:45,
    count2:10,
    count3:15
}

const Dashboard = () => {
    return (
        <><Box sx={{ flexGrow: 1 }}>
            <div className="main-container">
                <div className="container-left">
                    <Stack>
                    <HeaderCounter headlist={HeadList} countlist={CountList} />
                        <div className="annouce-container">s
                            <Annoucements />
                        </div>
                        <Typography variant="h3" component="p" className="" fontSize="1.5vw" marginBottom={"10px"}>Upcomings</Typography>
                        <div className="upcoming-container"> 
                            <UpcomingList/>
                        </div>  
                        <Typography variant="h3" component="p" className="" fontSize="1.5vw" marginTop={"20px"} marginBottom={"10px"}>Recent Leave Requests</Typography>
                        <div className="pending-container"> 
                            <PendingCounter headlist2={"Pending"} countlist2={'5'}/>
                            <PendingList/>
                        </div>     
                    </Stack>
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

export default Dashboard;
