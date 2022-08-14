import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import './styles/Home.css';
import logo from '../../assets/images/logo.png';
import elogo from '../../assets/images/center.png';
import Calender from 'Components/Calender';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import OnlineUser from 'Components/Onlineusers';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="main-container">
                <div className="container-left">
                    <div className="home-conatiner">
                        <Card sx={{ maxWidth: 100 }}>
                            <CardMedia component="img" height="100" src={logo} alt="green iguana" />
                        </Card>
                        <div className="e-logo">
                            {' '}
                            <Card sx={{ maxWidth: 100 }}>
                                <CardMedia component="img" height="100" src={elogo} alt="green iguana" />
                            </Card>
                        </div>
                        <Typography variant="h3" component="h2" className="heading-content">
                            University of Colombo School of Computing
                        </Typography>
                        <Typography variant="h4" component="h2" className="heading-content">
                            Welcome to the e-Learning Center of UCSC
                        </Typography>
                        <Typography variant="h3" component="h2" className="heading-content">
                            UCSC e-Learning පිරස්ථිතිය වෙත සාධරයෙන් පිළිගනිමු.
                        </Typography>
                    </div>
                    <div className="annouce-container">
                        <Typography variant="h3" component="h2" className="">
                            Site Annoucements
                        </Typography>
                        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography variant="h4" component="h3" className="">
                                            New Year Vacation
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography sx={{ display: '' }} component="h5" variant="h5" color="text.primary">
                                                by Admin User - Thursday, 4 August 2022, 3:29 PM
                                            </Typography>
                                            {
                                                ' — Dear students,You have been issued the Official Student Registration Number and Index Number for the degree programme. Please follow the steps below to view your official Student Registration Number and the Index Number.You are strongly advised to use your  official Student Registration Number and Index Number Number for all academic activities including examinations and assignments of the programme with effect from 8th August 2022.IMPORTANT: The Temporary Student Registration Number issued will be considered invalid from 15th August 2022.Should you need further assistance, please do not hesitate to contact us through the email, exam@ucsc.cmb.ac.lk Senior Assistant Registrar Examinations & Registration Division2022.08.04'
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography variant="h4" component="h3" className="">
                                            New Year Vacation
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography sx={{ display: '' }} component="h5" variant="h5" color="text.primary">
                                                by Admin User - Thursday, 4 August 2022, 3:29 PM
                                            </Typography>
                                            {
                                                ' — Dear students,You have been issued the Official Student Registration Number and Index Number for the degree programme. Please follow the steps below to view your official Student Registration Number and the Index Number.You are strongly advised to use your  official Student Registration Number and Index Number Number for all academic activities including examinations and assignments of the programme with effect from 8th August 2022.IMPORTANT: The Temporary Student Registration Number issued will be considered invalid from 15th August 2022.Should you need further assistance, please do not hesitate to contact us through the email, exam@ucsc.cmb.ac.lk Senior Assistant Registrar Examinations & Registration Division2022.08.04'
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    </div>
                </div>

                <div className="container-right">
                    <div className="calender-container">
                        <Calender />
                    </div>
                    <div className="mainmenu-container">
                        <Typography variant="h3" component="h2" className="headingmenu-content">
                            Main Menu
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <IconMessageDots />
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography sx={{ display: 'inline' }} component="h3" variant="h4" color="text.primary">
                                                    Site Annoucements
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        className="textCon"
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <IconMessageDots />
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography sx={{ display: 'inline' }} component="h3" variant="h4" color="text.primary">
                                                    Public Disscussions
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        className="textCon"
                                    />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </div>
                    <div className="onlineuser-container">
                        <Typography variant="h3" component="h4" className="">
                            Online Users
                        </Typography>
                        <OnlineUser />
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Home;
