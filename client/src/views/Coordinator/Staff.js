import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import './styles/Staff.css';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import HeaderCounter from 'Components/HeaderCounter2';
import StaffTable from 'Components/stickyheadertable';
import PendingStaffTable from 'Components/PendingSignup';
import TeamTable from 'Components/TeamList';

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

const CoordinatorStaff = () => {

    return ( 
        <><Box sx={{ flexGrow: 1 }}>
            <div className="main-staff-container">
                <div className="container-up">
                    <div className="staff-container">
                        <Typography variant="h3" component="h4" className="">
                                Pending Signup Approvals       
                        </Typography>
                        <PendingStaffTable />  
                    </div>
                </div>

                <div className="container-down">
                    <div className="staff-container">
                        <Typography variant="h3" component="h4" className="">
                                Members       
                        </Typography>
                        <StaffTable />  
                    </div>
                    {/* <div className="team-container">
                        <Typography variant="h3" component="h4" className="">
                            Teams
                        </Typography>
                        <TeamTable />
                    </div> */}
                </div>
            </div>
            </Box>
        </>
        
    );
};

export default CoordinatorStaff;
