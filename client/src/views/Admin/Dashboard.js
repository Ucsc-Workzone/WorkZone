import * as React from 'react';
<<<<<<< HEAD
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

=======
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Typography, Stack  } from '@mui/material';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';

import Box from '@mui/material/Box';
import AllUser from 'Components/AllUsers';
import Calender from 'Components/Calender';
import RecentAnnoucements from 'Components/RecentAnnouncements';
import EarningCard from 'ui-component/cards/Skeleton/EarningCard';
import TotalOrderLineChartCard from 'views/dashboard/Default/TotalOrderLineChartCard';
import './styles/Home.css';

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc

const HeadList = {
    head1:"No. of Members",
    head2:"Ongoing Projects",
<<<<<<< HEAD
    head3:"Completed Projects"
=======
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
}
var CountList = {
    count1:45,
    count2:10,
<<<<<<< HEAD
    count3:15
=======
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
}

const Dashboard = () => {
    return (
<<<<<<< HEAD
        <><Box sx={{ flexGrow: 1 }}>
            <div className="main-container">
                <div className="container-left">
                    <stack>
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
                    </stack>
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
        
=======
        <>
            <div className="mainContainer">
                <div className="leftConatiner">
                    <div className="cardConatiner">
                        <Box className='summary-card'>
                            <Box>
                                <TotalIncomeDarkCard title={HeadList.head1} count={CountList.count1} icon={<GroupsOutlinedIcon fontSize="inherit" />}/>
                            </Box>
                            <Box>
                                <TotalIncomeDarkCard title={HeadList.head2} count={CountList.count2} icon={<HourglassBottomOutlinedIcon fontSize="inherit" />}/>
                            </Box>
                            {/* <Box>
                                <TotalIncomeDarkCard title={HeadList.head3} count={CountList.count3} icon={<AssignmentTurnedInOutlinedIcon fontSize="inherit" />}/>
                            </Box> */}
                        </Box>
                        {/* <div className='subCard'>
                        <TotalOrderLineChartCard
                        title={'Registered User'}
                        count={20}
                        icon={''}
                        />
                        </div>
                        <div className='subCard'>
                        <TotalOrderLineChartCard
                        title={'Registered User '}
                        count={10}
                        icon={''}
                        />
                        </div> */}

                    </div>
                    <div className="annouceContainer" style={{padding:"10px"}}>
                    <RecentAnnoucements />
                    </div>
                    <div className="feedBack">
                        
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="calenConatiner">
                        <Calender />
                    </div>
                    <div>
                        <AllUser />
                    </div>
                </div>
            </div>
        </>
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
    );
};

export default Dashboard;
