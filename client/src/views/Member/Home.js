import Calender from 'Components/Calender';
import SiteAnnoucements from 'Components/SiteAnnoucements';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import NoAccountsOutlinedIcon from '@mui/icons-material/NoAccountsOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import App_todo from '../../App_todo';
import './styles/Home.css';
<<<<<<< HEAD
const MemberHome = () => {
    return (
        <>
            <div className="main-container">
                <div className="today-container"></div>
                <div className="right-container">
                    <div className="calender-container">
                        <Calender />
                    </div>
                    <div className="annouce-container">
                        <SiteAnnoucements />
                    </div>
                </div>

=======
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Divider, Grid } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import MemberProjectCard from 'Components/MemberProjects';
import OnlineUser from 'Components/Onlineusers';

const MemberHome = () => {
    const [open, setOpen] = React.useState(false);
    const [state, setStatus] = useState('');
    const [messege, setMessege] = useState('Your Attendenece has been reported');
    const [stat, setStat] = useState(false);
    const [button, setButton] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        var today = new Date();
        var curHr = today.getHours();

        if (curHr < 12) {
            setStatus('Good Morning');
        } else if (curHr < 18) {
            setStatus('Good Afternoon');
        } else {
            setStatus('Good evening');
        }
        setOpen(true);
    };

    const handleReport = () => {
        console.log(stat);
        if (!stat) {
            setMessege('Please submit your workreport at the end of the day to complete your attendence');
            setStat(true);
        } else {
            setMessege('You have alreday report your attendence');
        }

        setButton(false);
    };

    return (
        <>
            <div className="main-container">
                <div className="card-container">
                    <div className="report-conatiner">
                        <Button variant="contained" onClick={handleClickOpen}>
                            Report Duty
                        </Button>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <Typography
                                        variant="h3"
                                        component="h4"
                                        className=""
                                        style={{ marginBottom: '20px', marginTop: '20px' }}
                                    >
                                        {state}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        component="h4"
                                        className=""
                                        style={{ marginBottom: '20px', marginTop: '20px' }}
                                    >
                                       {messege}
                                    </Typography>
                                  
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                {button && (
                                    <Button onClick={handleReport} color="primary" variant="contained">
                                        Continue
                                    </Button>
                                )}
                                {!button && (
                                    <Button onClick={handleClose} color="primary" variant="contained">
                                        Continue
                                    </Button>
                                )}
                                <Button onClick={handleClose} color="primary" variant="outlined" autoFocus>
                                    Cancel
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <div className="summary-card">
                        <div>
                            <TotalIncomeDarkCard title={'Ongoing Projects'} count="3" icon={<DevicesOutlinedIcon fontSize="inherit" />} />
                        </div>
                        <div>
                            <TotalIncomeDarkCard title={'Pending Leaves'} count="2" icon={<NoAccountsOutlinedIcon fontSize="inherit" />} />
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
                                title={'Skelton Mobile App'}
                                date={'24.08.2022'}
                                subtask={'Prototype Design'}
                                days={'Today'}
                                color={'#8bc34a'}
                            />
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
>>>>>>> ba7068b973084811839542c6e429a372cbd31afc
            </div>
        </>
    );
};

export default MemberHome;
