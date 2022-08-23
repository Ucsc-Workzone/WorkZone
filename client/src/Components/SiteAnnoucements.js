import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CardMedia, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { IconMessageDots } from '@tabler/icons';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0
    },
    '&:before': {
        display: 'none'
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1)
    }
}));

const stylesM = {
    marginBottom: '100px'
};

const allNot={
    width:'100%',
    backgroundColor:'#fff',
    textAlign:'right',
    padding:'10px',
    cursor:'pointer',
   
}
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" styled={stylesM}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Admin" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant="h4" component="h3" className="">
                                    UCSC will closed for next week
                                </Typography>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: '' }} component="h5" variant="h5" color="text.primary">
                                        by Admin User - Thursday, 4 August 2022, 3:29 PM
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A special Holiday is declared by University of Colombo School of Computing (UCSC) for next week due to the current
                        prevailing situation of the country. Hence the academic programmes for all students will not be conducted and UCSC
                        will close entirely in the above period.
                        <Typography variant="h5">Senior Assistant Registrar/Academic & Publication 06.07.2022</Typography>
                        <Typography variant="h5">06.07.2022</Typography>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" styled={stylesM}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Admin" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant="h4" component="h3" className="">
                                    Invitation for celebrate the Anniversary of UCSC
                                </Typography>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: '' }} component="h5" variant="h5" color="text.primary">
                                        by Admin User - Thursday, 4 August 2022, 3:29 PM
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A special Holiday is declared by University of Colombo School of Computing (UCSC) for next week due to the current
                        prevailing situation of the country. Hence the academic programmes for all students will not be conducted and UCSC
                        will close entirely in the above period.
                        <Typography variant="h5">Senior Assistant Registrar/Academic & Publication 06.07.2022</Typography>
                        <Typography variant="h5">06.07.2022</Typography>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <div style={allNot}>
            <Typography>
                All Annoucments
            </Typography>
            </div>
        </div>
    );
}
