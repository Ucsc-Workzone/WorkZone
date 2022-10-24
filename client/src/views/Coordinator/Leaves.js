import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import './styles/Leaves.css';
import axios from 'axios';
import Calender from 'Components/Calender';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import OnlineUser from 'Components/Onlineusers';
import HeaderCounter from 'Components/HeaderCounter3';
import PendingLeaves from 'Components/PendingLeaves';
import PendingLeavescard from 'Components/PendingLeavecard';
import LeaveHistory from 'Components/LeaveHistory';

import BarChart from 'Components/BarChart';
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: '3000px',
    color: theme.palette.text.secondary
}));

const HeadList = {
    head1: 'Pending',
    head2: 'Approved',
    head3: 'Rejected'
};
var CountList = {
    count1:3,
    count2:7,
    count3:3
}

const CoordinatorLeaves = () => {
    // const [count1, setCount1] = useState();
    // const [count2, setCount2] = useState();
    // const [count3, setCount3] = useState();

    useEffect(() => {
        axios
            .post('http://localhost:5000/api/coordinator/leavesummary', {
                center_id: 1
            })
            .then((response) => {
                console.log(response.data);

                // setCount1(response.data[0][0]['leavepending']);
                // setCount2(response.data[1][0]['leaveAccept']);
                // setCount3(response.data[2][0]['leaveRejected']);
                //setpendingdata(response.data)

                leaverequest();
            });
    });
    const leaverequest = () => {
        // let CountList = {
        //     count1: count1,
        //     count2: count2,
        //     count3: count3
        // };
    };

    const [userData, setUserData] = useState({
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
            {
                label: 'Accepted',
                data: [10, 15, 16, 8, 6, 20, 15, 0, 0, 0, 0, 0],
                backgroundColor: ['#0f65fa'],
                borderColor: 'white',
                borderWidth: 1
            },
            {
                label: 'Rejected',
                data: [8, 7, 6, 2, 3, 5, 6, 0, 0, 0, 0, 0],
                backgroundColor: ['#c2c6d1'],
                borderColor: 'white',
                borderWidth: 1
            }
        ]
    });

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <div className="main-leave-container">
                    <div className="leavecontainer-left">
                        <Typography variant="h2" component="h4" className="" colour="blue" textAlign={'center'}>
                            AUGUST
                        </Typography>
                        <HeaderCounter headlist={HeadList} countList={CountList} />
                        <div className="chart-container">
                            <Typography variant="h2" component="h3" textAlign={'center'} style={{ color: '#0C518A' }}>
                                2022
                            </Typography>
                            <Typography variant="h3" component="h4" textAlign={'center'}>
                                Monthly View
                            </Typography>
                            <Typography variant="h4" component="h5" textAlign={'center'} color="grey">
                                (For Leave Requests)
                            </Typography>
                            <Box style={{ display: 'flex', justifyContent: 'left', width: '100', top: '50%' }}>
                                <div style={{ width: '100%' }}>
                                    <BarChart chartData={userData} />
                                </div>
                            </Box>
                        </div>
                        <div className="Leavehistory-container">
                            <LeaveHistory />
                        </div>
                    </div>
                {/* <div className="leavecontainer-right">
                    <div className="calender-container">
                        <Calender />
                    </div>
                    {/* <div className="onlineuser-container">

                        <Typography variant="h3" component="h4" textAlign={'center'}>
                            Pending Leave Requests
                        </Typography>
                        <Box style={{display:"flex", justifyContent: 'left', width:'100', top: "50%"}}>
                          <PendingLeavescard />        
                        </Box>
                    </div> */}
                {/* </div> */} 
            </div>
            </Box>
        </>
    );
};

export default CoordinatorLeaves;
