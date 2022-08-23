import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DoughtChart from 'Components/DoughtChart';
import Chip from '@mui/material/Chip';

import { useState } from 'react';
import { Link } from 'react-router-dom';
const cardStyle = {
    marginTop: '20px',
    backgroundColor:'#fff',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
   
};
const dueTime={
    marginTop: '40px',
    marginRight:'30px',
    textAlign:'center',
    fontSize:'15px'
};
const linkComponent={
    textDecoration:'none'
}
export default function MemberProjectCard({ title, date,subtask,color,days }) {
    const [userData, setUserData] = useState({
        // labels: ["CM", "NC"],
        datasets: [
            {
                label: 'Users Gained',
                data: [75, 25],
                backgroundColor: ['#0f65fa', '#c2c6d1'],
                borderColor: 'white',
                borderWidth: 2
            }
        ]
    });
    const theme = useTheme();

    return (
        <Link  to='/member/project/1' style={linkComponent}
        >
        <Card sx={{ display: 'flex' }} style={cardStyle}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h3">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary" component="div">
                        Due Date:{date}
                    </Typography>
                    <Typography variant="subtitle12" color="primary" component="div">
                        {subtask}
                    </Typography>
                </CardContent>
            </Box>
           
                <Box style={{ display: 'flex', justifyContent: 'right', width: '53%'}}>
                <Typography variant="subtitle12" color={color} component="div" style={dueTime}>
                        {days}
                    </Typography>
                    
                    <div style={{ width: '29%' ,marginRight:'-35px'}}>
                        <DoughtChart chartData={userData} percentage={'75'} />
                    </div>
                </Box>
       
            {/* <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      /> */}
        </Card></Link>
        
    );
}
