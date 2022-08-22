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


const DirectorProjects = () => {

   

    return (
        <><Box sx={{ flexGrow: 1 }}>
        <div className="main-leave-container">
            <div className="leavecontainer-left">
               
                <div className="Leavehistory-container">
                    <OngoingProjects flag={false} />  
                </div>
                <div className="Leavehistory-container">
                    <ProjectHistory />  
                </div>
                
            </div>

            <div className="leavecontainer-right">
                <div className="calender-container">
                    <Calender />
                </div>
             
            </div>
        </div>
        </Box>
    </>
    );
};

export default DirectorProjects;
