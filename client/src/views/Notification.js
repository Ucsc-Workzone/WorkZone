import NotificationList from 'layout/MainLayout/Header/NotificationSection/NotificationList';

// material-ui
import InputBase from '@mui/material/InputBase';
import './styles/notification.css';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import { useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';


import Modal from '@mui/material/Modal';
import {
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Stack,
    TextField,
    Typography
} from '@mui/material';

// assets
import {
    IconArchive,
    IconBell,
    IconBookmarksOff,
    IconBrandTelegram,
    IconBuildingStore,
    IconMailbox,
    IconNotification,
    IconPhoto
} from '@tabler/icons';
import User1 from 'assets/images/users/user-round.svg';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: 16,
    '&:hover': {
        // background: theme.palette.primary.light
    },
    '& .MuiListItem-root': {
        padding: 0
    }
}));
import { Avatar } from '@mui/material';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    }
}));

import PerfectScrollbar from 'react-perfect-scrollbar';
import { useState } from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Notification = () => {
    const [marray5, setArray5] = useState([]);

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [project,setProject]=useState([]);
    const handleOpen = (e) => {
        // notificationType();
        
        notificationType();
        setOpen(true);
    console.log(e.target.value)
    }
    const handleClose = () => setOpen(false);
    const notificationType = () => {
        let type='m-005';
      //  console.log(type, notid);
        axios
            .post('http://localhost:5000/api/notification/notificationType', {
                type: 'm-005',
                notificationId: 1
            })
            .then((response) => {
                if ((type = 'm-005')) {
                    // console.log(response.data);
                    setArray5(response.data);
                    console.log(response.data);
                }
            });
        return true;
    };
    const [allArray, setAllArray] = useState([]);
    const userid = localStorage.getItem('userid');

    useEffect(() => {
        allNotification();
    }, []);

    const allNotification = () => {
        axios
            .post('http://localhost:5000/api/notification/allnotification', {
                userid: userid
            })
            .then((response) => {
                console.log(response.data);
                setAllArray(response.data);
            });
    };
    const theme = useTheme();

    const chipSX = {
        height: 24,
        padding: '0 6px'
    };
    const chipErrorSX = {
        ...chipSX,
        color: theme.palette.orange.dark,
        backgroundColor: theme.palette.orange.light,
        marginRight: '5px'
    };

    const chipWarningSX = {
        ...chipSX,
        color: theme.palette.warning.dark,
        backgroundColor: theme.palette.warning.light
    };

    const chipSuccessSX = {
        ...chipSX,
        color: theme.palette.success.dark,
        backgroundColor: theme.palette.success.light,
        height: 28
    };
    return (
        <>
            <div className="mainnotContainer">
                <div className="serchArea">
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                </div>
                <div className="filterArea">
                    <div className="badgesArea">
                        <div className="all-not allcat">
                            <div className="contetent">
                                <Typography>All</Typography>
                            </div>
                            <div className="icon">
                                <IconBell />
                            </div>
                        </div>
                        <div className="all-not">
                            <div className="contetent">
                                <Typography>Read</Typography>
                            </div>
                            <div className="icon">
                                <IconBookmarksOff />
                            </div>
                        </div>

                        <div className="all-not">
                            <div className="contetent">
                                <Typography>Archieve</Typography>
                            </div>
                            <div className="icon">
                                <IconArchive />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notificationArea">
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: '100%',
                            py: 0,
                            borderRadius: '10px',
                            [theme.breakpoints.down('md')]: {
                                maxWidth: 300
                            },
                            '& .MuiListItemSecondaryAction-root': {
                                top: 22
                            },
                            '& .MuiDivider-root': {
                                my: 0
                            },
                            '& .list-container': {
                                pl: 7
                            }
                        }}
                    >
                        {allArray.map((notify) => {
                            return (
                                <>
                                    <ListItem alignItems="center" id={notify.id} >
                                        <ListItemAvatar>
                                            <Avatar alt={notify.firstrName} src="assets/images/users/user-round.svg" />
                                        </ListItemAvatar>
                                        <ListItemText primary={notify.firstrName + ' ' + notify.lastName} />

                                        <ListItemSecondaryAction>
                                            <Grid container justifyContent="flex-end">
                                                <Grid item xs={12} container>
                                                <Grid item>
                                                    <button onClick={handleOpen} value={[notify.notificationId,notify.type]} >
                                             view
                                                    </button>
                                                        
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip label="delete" sx={chipErrorSX} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip label="Archieve" sx={chipWarningSX} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Grid container direction="column" className="list-container">
                                        <Grid item xs={12} sx={{ pb: 2 }}>
                                            {notify.type == 'm-005' &&  (
                                                <Typography variant="subtitle2">
                                                    You have been assigned to a project view more..
                                                </Typography>
                                            )}
                                            {notify.type == 'm-003' &&  (
                                                <Typography variant="subtitle2">
                                                   Your leave request has been Accepted.
                                                </Typography>
                                            )}
                                             {notify.type == 'm-004' &&  (
                                                <Typography variant="subtitle2">
                                                   Your leave request has been Rejected.
                                                </Typography>
                                            )}
                                             {notify.type == 'm-006' &&  (
                                                <Typography variant="subtitle2">
                                                   You have a task trasnfered to you 
                                                </Typography>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                {/* <Grid item>
                                                    <Chip label="Unread" sx={chipErrorSX} />
                                                </Grid>
                                                <Grid item>
                                                    <Chip label="New" sx={chipWarningSX} />
                                                </Grid> */}
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Divider />
                                    <ListItemWrapper />
                                </>
                            );
                        })}
                    </List>

                    <div>
                        
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                            You have been assign to a project  
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                  <Button>Accept</Button>
                                  <Button>Reject</Button>
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                    <div>
                        
                        <Modal
                            open={open1}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                            You have been assign to a project  
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                  <Button>Accept</Button>
                                  <Button>Reject</Button>
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notification;
