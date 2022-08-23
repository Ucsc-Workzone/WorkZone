import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import './styles/Dashboard.css';

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
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
<<<<<<< HEAD
                    <stack>
                    <HeaderCounter headlist={HeadList} countlist={CountList} />
                        <div className="annouce-container">s
=======
                    <Stack>
                    <Box className='summary-card'>
                        <Box>
                            <TotalIncomeDarkCard title={HeadList.head1} count={CountList.count1} icon={<GroupsOutlinedIcon fontSize="inherit" />}/>
                        </Box>
                        <Box>
                            <TotalIncomeDarkCard title={HeadList.head2} count={CountList.count2} icon={<HourglassBottomOutlinedIcon fontSize="inherit" />}/>
                        </Box>
                        <Box>
                            <TotalIncomeDarkCard title={HeadList.head3} count={CountList.count3} icon={<AssignmentTurnedInOutlinedIcon fontSize="inherit" />}/>
                        </Box>
                    </Box>
                        <div className="annouce-container">
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
                            <Annoucements />
                        </div>
                        <Typography variant="h3" component="p" className="" fontSize="1.5vw" marginBottom={"10px"}>Upcomings</Typography>
                        <div className="upcoming-container"> 
                            <UpcomingList/>
                        </div>  
                        <Typography variant="h3" component="p" className="" fontSize="1.5vw" marginTop={"20px"} marginBottom={"10px"}>Recent Leave Requests</Typography>
                        <div className="pending-container"> 
                            <PendingCounter headlist2={"Pending"} countlist2={'3'}/>
                            <PendingList flag={true} />
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
        
    );
};

export default Dashboard;
