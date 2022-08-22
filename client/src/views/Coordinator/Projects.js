import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import './styles/Projects.css';

import Calender from 'Components/Calender';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import OnlineUser from 'Components/Onlineusers';
import HeaderCounter from 'Components/HeaderCounter3';
import PendingLeaves from 'Components/PendingLeaves';
import TeamsCardvieward from 'Components/TeamsCardview';
import ProjectHistory from 'Components/ProjectHistory';
import OngoingProjects from 'Components/OngoingProjects';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import BarChart from 'Components/BarChart';

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
    count1:3,
    count2:7,
    count3:3
}


const CoordinatorProjects = () => {

    // const [userData, setUserData] = useState({
    //     labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    //     datasets: [
    //       {
    //         label: "Accepted",
    //         data: [10, 15, 16, 8, 6, 20, 15, 16, 11, 12, 16, 13],
    //         backgroundColor: [
    //           "#0f65fa",
    //         ],
    //         borderColor: "white",
    //         borderWidth: 1,
    //       },
    //       {
    //         label: "Rejected",
    //         data: [8, 7, 6, 2, 3, 5, 6, 8, 10, 5, 6, 12],
    //         backgroundColor: [
    //           "#c2c6d1",
    //         ],
    //         borderColor: "white",
    //         borderWidth: 1,
    //       },
    //     ],
    //   });

    return (
        <><Box sx={{ flexGrow: 1 }}>
        <div className="main-leave-container">
            <div className="leavecontainer-left">
                {/* <Typography variant="h2" component="h4" className="" colour="blue" textAlign={'center'}>AUGUST</Typography> */}
                {/* <HeaderCounter headlist={HeadList} countlist={CountList} /> */}
                {/* <div className='chart-container'>
                    <Typography variant="h2" component="h3" textAlign={'center'} style={{color:'#0C518A'}}>
                        2022
                    </Typography>
                    <Typography variant="h3" component="h4" textAlign={'center'}>
                        Monthly View
                    </Typography>
                    <Typography variant="h4" component="h5" textAlign={'center'} color='grey'>
                        (For Leave Requests)
                    </Typography>
                    <Box style={{display:"flex", justifyContent: 'left', width:'100', top: "50%"}}>
                            <div style={{ width: "100%"}}>
                            <BarChart chartData={userData}/>
                            </div>             
                    </Box>
                </div>   */}
                <div className="Leavehistory-container">
                    <OngoingProjects flag={true}/>  
                </div>
                <div className="Leavehistory-container">
                    <ProjectHistory />  
                </div>
                
            </div>

            <div className="leavecontainer-right">
                <div className="calender-container">
                    <Calender />
                </div>
                <div className="onlineuser-container">
                    <Typography variant="h3" component="h4" textAlign={'center'}>
                        Center Teams
                    </Typography>
                    <Box style={{width:"100%",justifyContent:"left", display:"flex"}}>
                    <TextField
                        id="search-bar"
                        style={{ fill: "blue" ,marginLeft:"30px",marginBottom:"20px", marginTop:"30px", padding:"0px"}}
                        onInput={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                        label="Search by Name"
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                        />
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon style={{ fill: "blue" ,marginLeft:"0px",marginBottom:"0px"}} />
                        </IconButton>
                    </Box>
                    <Box style={{display:"flex", justifyContent: 'center', width:'100', top: "50%"}}>
                      <TeamsCardvieward />        
                    </Box>
                </div>
            </div>
        </div>
        </Box>
    </>
    );
};

export default CoordinatorProjects;
