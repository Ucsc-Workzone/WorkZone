import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './home.css';
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
                    <div className="home-conatiner">logo</div>
                </div>
                <div className="container-right">hi</div>
            </div>
        </Box>
    );
};

export default Home;
