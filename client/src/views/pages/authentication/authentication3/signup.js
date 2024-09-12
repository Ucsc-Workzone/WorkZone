import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery,Card,CardMedia, Box } from '@mui/material';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthRegister from '../auth-forms/AuthSignup';
import AuthFooter from 'ui-component/cards/AuthFooter';
import logo from '../../../../assets/images/workzone.png';
import bgsignup from '../../../../assets/images/signup.jpg';
import './styles/signup.css';
// assets

// ===============================|| Partially Signup Form - Members||=============================== //

const Register = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (

        <><Box className='maincontainer'>
            <Box className='leftcontainer'>
                <Box className='leftupcontainer'>
                    <Typography variant="subtitle1" color="secondary" sx={{ padding:'40px',fontSize:'20px' }}>
                            Welcome to the WorkZone Community

                            <h1 class="singup-title">Get With The Plan of <span id="orgspan" > YOUR ORGANIZATION</span></h1>
                    </Typography>
                </Box>
                <Box className='leftmidcontainer'>
                </Box>
                <Box className='leftdowncontainer'>
                    <Typography variant="subtitle1" color="secondary" sx={{ cursor: 'pointer' }}>
                        <Link to="/" style={{ textDecoration: 'none', fontSize: 16, color: 'blue' }}>Back to Home</Link>
                    </Typography>
                </Box>
              
            </Box>
            <Box className='rightcontainer'>
                <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh', minWidth: "500px" }}>
                    <Grid item xs={14}>
                        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <div className="e-logo">
                                            {' '}
                                            <Card sx={{ maxWidth: 500 }}>
                                                <CardMedia component="img" height="60" src={logo} alt="green iguana" />
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item sx={{padding:'0px'}}>
                                                <Stack alignItems="center" justifyContent="center">
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Signup
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthRegister />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} sx={{ m: 3, mt: 1, magrin:0 }}> */}

                    {/* </Grid> */}
                </Grid>
            </Box>

        </Box><AuthFooter /></>
        
    );
};

export default Register;
