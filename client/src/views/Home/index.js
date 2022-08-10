import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CardMedia, Card, Typography } from '@mui/material';
import './home.css';
import logo from '../../assets/images/logo.png';
import elogo from '../../assets/images/center.png';
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
                    <div className="annouce-conatiner">
                        {/* <Card sx={{ maxWidth: 100 }}>
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
                        </Typography> */}
                    </div>
                </div>

                <div className="container-right">hi</div>
            </div>
        </Box>
    );
};

export default Home;
