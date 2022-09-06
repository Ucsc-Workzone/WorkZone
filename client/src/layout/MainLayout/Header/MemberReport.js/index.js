import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';

const LoginButton = () => {
    const [open, setOpen] = useState(false);
    const [state, setStatus] = useState('');
    const [messege, setMessege] = useState('Your Attendenece has been reported');
    const [stat, setStat] = useState(false);
    const [button, setButton] = useState(true);
    const [project, setProject] = useState('');
    const [leave, setLeave] = useState('');
    const [log, setLog] = useState(false);
    useEffect(() => {
        const loginState = localStorage.getItem('loginStatus');
        setLog(loginState);
    });
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
    const handleClose = () => {
        setOpen(false);
    };
    const handleReport = () => {
        const token=localStorage.getItem('token')
        axios
        .post('http://localhost:5000/api/member/dutyreport', {
            accessToken: token
        })
        .then((response) => {
            console.log(response.data);
           
        });
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
            
            <div className="report-conatiner">
            <Button variant="contained" onClick={handleClickOpen}>
                Report Duty
            </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Typography variant="h3" component="h4" className="" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                {state}
                            </Typography>
                            <Typography variant="h3" component="h4" className="" style={{ marginBottom: '20px', marginTop: '20px' }}>
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
                        {<Button onClick={handleClose} color="primary" variant="outlined" autoFocus>
                            Cancel
                        </Button>
}
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
};

export default LoginButton;
