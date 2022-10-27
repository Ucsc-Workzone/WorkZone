import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import './styles/work.css';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import HeaderCounter from 'Components/HeaderCounter2';
import WorkTable from '../../Components/WorkReportMember';
import TeamTable from 'Components/TeamList';
import {useState,useEffect} from 'react';
import axios from 'axios';

import Calender from 'Components/Calender';
import PendingCounter from 'Components/PendingCounter';
import PendingList from 'Components/PendingList';
import PendingWorkMember from 'Components/PendingWorkReportsM';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));


const HeadList = {
    head1:"No. of Members",
    head2:"No. of Teams",
}
var CountList = {
    count1:45,
    count2:15
}

const CoordinatorWorkrecords = () => {

    useEffect(()=>{
        

    })
    return (
        <><Box sx={{ flexGrow: 1 }}>
            <div className="main-record-container">
                <div className="workcontainer-up" >
                    <div className='up-left-container' display="flex">
                      
                        <div className="record-pending-container"> 
                            <PendingWorkMember />
                        </div>
                    </div>
                    {/* <div className='up-right-container'>
                        <div className="calender-container">
                                <Calender />
                        </div>
                    </div> */}
                </div>

                <div className="workcontainer-down">
                    <div className="record-container">
                        <WorkTable />  
                    </div>
                </div>
            </div>
            </Box>
        </>
    );
};

export default CoordinatorWorkrecords;
