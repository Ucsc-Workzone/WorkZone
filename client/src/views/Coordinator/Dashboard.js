import * as React from 'react';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { Typography, Stack  } from '@mui/material';
import './styles/Dashboard.css';

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import Calender from 'Components/Calender';
import OnlineUser from 'Components/Onlineusers';
import HeaderCounter from 'Components/HeaderCounter3';
import Annoucements from 'Components/RecentAnnouncements';
import PendingCounter from 'Components/PendingCounter';
import PendingList from 'Components/PendingList';
import UpcomingList from 'Components/UpcomingsList';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import axios from 'axios';
import { useEffect } from 'react';


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
// var CountList = {
//     count1:45,
//     count2:10,
//     count3:15
// }

const Dashboard = () => {
  useEffect(()=>{
    cardData();

  })
  const [count1,setCount1]=useState();
  const [count2,setCount2]=useState();
  const [count3,setCount3]=useState();
    
    const cardData=()=>{
        axios
        .post('http://localhost:5000/api/coordinator/getCoordinatorCards', {
            center_id: 1
        })
        .then((response) => {
            console.log(response.data);
          setCount1(response.data[0][0]['memberCount'])
          setCount2(response.data[1][0]['projectCount'])
          setCount3(response.data[2][0]['projectCountf'])


        });
    }
    return (
        <><Box sx={{ flexGrow: 1 }}>
            <div className="main-container">
            
                <div className="container-left">
                    <Stack>
                    <Box className='summary-card'>
                        <Box>
                            <TotalIncomeDarkCard title={HeadList.head1} count={count1} icon={<GroupsOutlinedIcon fontSize="inherit" />}/>
                        </Box>
                        <Box>
                            <TotalIncomeDarkCard title={HeadList.head2} count={count2} icon={<HourglassBottomOutlinedIcon fontSize="inherit" />}/>
                        </Box>
                        <Box>
                            <TotalIncomeDarkCard title={HeadList.head3} count={count3} icon={<AssignmentTurnedInOutlinedIcon fontSize="inherit" />}/>
                        </Box>
                    </Box>
                        <div className="annouce-container">
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
        </Box></>
        
    );
};

export default Dashboard;
