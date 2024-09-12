import * as React from 'react';
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
import './../Coordinator/styles/Workrecords.css';

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';

import PendingCounter from 'Components/FBPendingCounter';
import PendingList from 'Components/FBPendingList';

const HeadList = {
    head1:"No. of Registered Users",
    head2:"No. of Registered Division",
}
var CountList = {
    count1:52,
    count2:2,
}

const Dashboard = () => {
    return (
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
                    
                        <div className='up-left-container' display="flex">
                            <Typography variant="h3" component="h4" className="" style={{marginBottom:"20px",marginTop:"20px"}}>
                                Weekly Feedbacks       
                            </Typography>
                            <div className="record-pending-container"> 
                                {/* <PendingCounter headlist2={"Pending"} countlist2={'3'}/> */}
                                <PendingList flag={false} />
                            </div>
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
    );
};

export default Dashboard;
