// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
    Avatar,
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
import { IconBrandTelegram, IconBuildingStore, IconMailbox, IconPhoto } from '@tabler/icons';
import User1 from 'assets/images/users/user-round.svg';
import { border } from '@mui/system';
import { Scale } from 'chart.js';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: 16,
    '&:hover': {
        backgroundColor: theme.palette.action.hover
    },
    '& .MuiListItem-root': {
        padding: 0
    }
}));

const rows = [
    createData('member1.jpg', 'Malithi Perera', '24/08/2022'),
    createData('member2.jpg', 'Bimsara Kulasekara', '24/08/2022'),
    createData('member6.jpg', 'Pamodha Mahagamage', '24/08/2022')
  ];

function createData(id, name, date) {
return { id, name, date };
}
// ==============================|| Teams List ||============================== //

const PendingListLeave = () => {
    const theme = useTheme();

    const chipSX = {
        height: 24,
        padding: '0 6px'
    };
    const chipErrorSX = {
        ...chipSX,
        color: theme.palette.orange.dark,
        backgroundColor: theme.palette.orange.light,
        marginRight: '5px',
        height: 28,
    };

    const chipWarningSX = {
        ...chipSX,
        color: theme.palette.warning.dark,
        backgroundColor: theme.palette.warning.light,
        height: 28
    };

    const chipSuccessSX = {
        ...chipSX,
        color: theme.palette.success.dark,
        backgroundColor: theme.palette.success.light,
        height: 28
    };

    return (
        <>
        <List
            sx={{
                width: '100%',
                maxWidth: 330,
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
            <ListItemWrapper>
                <Typography variant="caption" display="block"  align="right" gutterBottom>
                    create on 20/08/2022
                </Typography>
                <ListItem alignItems="center">

                    {/* <ListItemAvatar>
                        <Avatar alt="Malithi Perera" src={require(`../assets/images/Profile/member1.jpg`)} />
                    </ListItemAvatar> */}
                    <ListItemText primary="Mobile App -Team" />
                    <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                {/* <Typography variant="caption" display="block" gutterBottom>
                                   2 h ago
                                </Typography> */}
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction>
                </ListItem>
                <Grid container direction="column" className="list-container">
                    <Grid item xs={12} sx={{ pb: 2 }}>
                        <Typography variant="subtitle2" style={{paddingTop:"5px"}}>Assign to Mobile App Project</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            {/* <Grid item>
                                <Chip label="Reject" sx={chipErrorSX} />
                            </Grid> */}
                            <Grid item>
                                <Chip label="Manage Team" sx={chipSuccessSX} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItemWrapper>
            <Divider />
            <ListItemWrapper>
                <Typography variant="caption" display="block" align="right" gutterBottom>
                    create on 30/06/2022
                </Typography>
                <ListItem alignItems="center">
                    {/* <ListItemAvatar>
                        <Avatar alt="Bimsara Kulasekara" src={require(`../assets/images/Profile/member2.jpg`)} />
                    </ListItemAvatar> */}
                    <ListItemText primary="Bit Webkit -Team" />
                    <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                {/* <Typography variant="caption" display="block" gutterBottom>
                                   30 min ago
                                </Typography> */}
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction>
                </ListItem>
                <Grid container direction="column" className="list-container">
                    <Grid item xs={12}>
                        <Grid container>
                            {/* <Grid item>
                                <Chip label="" sx={chipWarningSX}  />
                            </Grid> */}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ pb: 2 }}>
                        <Typography variant="subtitle2" style={{paddingTop:"5px"}}>Assign to Bit Webkit Project</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            {/* <Grid item>
                                <Chip label="Reject" sx={chipErrorSX} />
                            </Grid> */}
                            <Grid item>
                                <Chip label="Manage Team" sx={chipSuccessSX} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItemWrapper>
            <ListItemWrapper>
                <Typography variant="caption" display="block" align="right" gutterBottom>
                   create on 20/06/2022
                </Typography>
                <ListItem alignItems="center">
                    {/* <ListItemAvatar>
                        <Avatar alt="Pamodha Mahagamage" src={require(`../assets/images/Profile/member3.jpg`)} />
                    </ListItemAvatar> */}
                    <ListItemText primary="AKZ System - Team" />
                    <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                {/* <Typography variant="caption" display="block" gutterBottom>
                                   2 min ago
                                </Typography> */}
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction>
                    
                    
                </ListItem>
                <Grid container direction="column" className="list-container">
                    <Grid item xs={12}>
                        <Grid container>
                            {/* <Grid item>
                                <Chip label="" sx={chipWarningSX}  />
                            </Grid> */}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ pb: 2 }}>
                        <Typography variant="subtitle2" style={{paddingTop:"5px"}}>Assign to AKZ System Project</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            {/* <Grid item>
                                <Chip label="Reject" sx={chipErrorSX} />
                            </Grid> */}
                            <Grid item>
                                <Chip label="Manage Team" sx={chipSuccessSX} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItemWrapper>
        </List> </>
    );
};

export default PendingListLeave;
