import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import OnlineUser from 'Components/Onlineusers';

const SiteAnnoucements = () => {
    return (
        <>
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

                <Divider variant="inset" component="li" />
            </List>
        </>
    );
};

export default SiteAnnoucements;
