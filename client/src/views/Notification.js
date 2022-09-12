import NotificationList from 'layout/MainLayout/Header/NotificationSection/NotificationList';

// material-ui
import InputBase from '@mui/material/InputBase';
import './styles/notification.css';

import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
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

// notification status options
const notificationArray = [
    {
        id: 1,
        from: 'Malithi Perera',
        label: 'You have been assign to a task',
        image: 'member1.jpg',
        staus: 'read'
    },
    {
        id: 2,
        from: 'Pamodha Mahagamage',
        label: 'Trasfer a work',
        image: 'member1.jpg',
        staus: 'read'
    },
    {
        id: 3,
        from: 'Hiruni Guruge',
        label: 'Leave request has been accepted',
        image: 'member1.jpg',
        staus: 'read'
    },
    {
        id: 4,
        from: 'Hiruni Guruge',
        label: 'Leave requested has been rejected',
        image: 'member1.jpg',
        staus: 'read'
    }
];
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

const Notification = () => {
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
                        {notificationArray.map((notify) => {
                            return (
                                <>
                                    <ListItem alignItems="center" id={notify.id}>
                                        <ListItemAvatar>
                                            <Avatar alt="John Doe" src='assets/images/users/user-round.svg' />
                                        </ListItemAvatar>
                                        <ListItemText primary={notify.from} />
                                        <ListItemSecondaryAction>
                                            <Grid container justifyContent="flex-end">
                                                <Grid item xs={12} container>
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
                                            <Typography variant="subtitle2">
                                                {notify.label}
                                            </Typography>
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
                </div>
            </div>
        </>
    );
};

export default Notification;
