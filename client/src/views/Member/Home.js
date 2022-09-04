import Calender from 'Components/Calender';
import SiteAnnoucements from 'Components/SiteAnnoucements';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import NoAccountsOutlinedIcon from '@mui/icons-material/NoAccountsOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import App_todo from '../../App_todo';
import RoutesRes from 'hooks/routeRes';
import './styles/Home.css';
import { useState, useEffect } from 'react';

import { Button, Divider, Grid } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import MemberProjectCard from 'Components/MemberProjects';
import OnlineUser from 'Components/Onlineusers';
import axios from 'axios';
const MemberHome = () => {
    const [open, setOpen] = React.useState(false);
    const [state, setStatus] = useState('');
    const [messege, setMessege] = useState('Your Attendenece has been reported');
    const [stat, setStat] = useState(false);
    const [button, setButton] = useState(true);
    const [project,setProject]=useState('')
    const [leave,setLeave]=useState('')
   
 
  

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .post('http://localhost:5000/api/member/getData', {
                accessToken: token
            })
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    const projectCount=response.data[0]['project_count']
                    setProject(projectCount)
                    const leaveCount=response.data[1]['leavecount']
                    setLeave(leaveCount)
                }
            });
    }, []);
    return (
        <>
            <div className="main-container">
                <div className="card-container">
                  
                    <div className="summary-card">
                        <div>
                            <TotalIncomeDarkCard title={'Ongoing Projects'} count={project} icon={<DevicesOutlinedIcon fontSize="inherit" />} />
                        </div>
                        <div>
                            <TotalIncomeDarkCard title={'Pending Leaves'} count={leave} icon={<NoAccountsOutlinedIcon fontSize="inherit" />} />
                        </div>
                        <div>
                            <TotalIncomeDarkCard title={'Pending Reports'} count="3" icon={<SummarizeOutlinedIcon fontSize="inherit" />} />
                        </div>
                    </div>
                </div>

                <div className="conatiner-down">
                    <div className="online-container">
                        <div className="projectCard">
                            <Typography variant="h3" component="h4" className="" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                On Going Projects
                            </Typography>
                            
                            <MemberProjectCard
                                title={'UCSC Bit Web App'}
                                date={'04.09.2022'}
                                subtask={'Admin Component design'}
                                days={'10 days remaining'}
                                color={'#ffc107'}
                            />
                        </div>

                        <div className="siteAnnouce">
                            <Typography variant="h3" component="h4" className="" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                Site Annoucements
                            </Typography>
                            <SiteAnnoucements />
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="calender-container">
                            <Calender />
                        </div>
                        <div className="annouce-container">
                            <OnlineUser />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberHome;
