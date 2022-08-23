import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './styles/recentannou.css';

var Annoucementlist ={
    id:1,
    topic:"New Year Vacation",
    by:"by Admin User - Thursday, 4 August 2022, 3:29 PM",
    description:' — Dear students,You have been issued the Official Student Registration Number and Index Number for the degree programme. Please follow the steps below to view your official Student Registration Number and the Index Number.You are strongly advised to use your  official Student Registration Number and Index Number Number for all academic activities including examinations and assignments of the programme with effect from 8th August 2022.IMPORTANT: The Temporary Student Registration Number issued will be considered invalid from 15th August 2022.Should you need further assistance, please do not hesitate to contact us through the email, exam@ucsc.cmb.ac.lk Senior Assistant Registrar Examinations & Registration Division2022.08.04'
}

const RecentAnnoucements = () => {

    return (
        <>
            <Box style={{display: 'flex', justifyContent: 'right'}}>
                <Button variant="contained"><Typography className="seeall">All Annoucements</Typography></Button>
            </Box>
            <Typography variant="h2" component="h3" className="" textAlign="center">
                Annoucements
            </Typography>
            <Typography variant="h3" component="h4" className="" >
                Recently Published
            </Typography>
            <Box style={{display: 'flex', justifyContent: 'right'}}>
                <Button variant="outlined"><Typography className="addone" >+ NEW</Typography></Button>
            </Box>
            <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography variant="h4" component="h3" className="">
                                {Annoucementlist.topic}
                            </Typography>
                        }
                        secondary={
                            <React.Fragment>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{ display: '' }} component="h5" variant="h5" color="text.primary">
                                            {Annoucementlist.by}
                                        </Typography>
                                    </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography justifyContent="center">
                                                {Annoucementlist.description}
                                            </Typography> 
                                        </AccordionDetails>
                                </Accordion>
                            </React.Fragment>
                        }
                    />
                </ListItem>

                
                <Divider variant="inset" component="li" />
            </List>

        </>
    );
};

export default RecentAnnoucements;
