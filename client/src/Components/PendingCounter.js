import * as React from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import './styles/pendingcounter.css';


const PendingCounter = ({headlist2, countlist2}) => {
    return (
        <div className="pending-counter"> 
            <Grid container spacing={2} minHeight={160}>
                <Grid xs display="flex" justifyContent="center" alignItems="center" direction="column" >
                    <Box xs display="block">
                        <Typography variant="h3" component="p" className="" fontSize="1.5vw">
                            {headlist2}
                        </Typography>
                    </Box>
                    <Box xs display="block" >
                        <Typography variant="h1" component="p" className="" fontSize="5vw">
                            {countlist2}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
        );
}
 
export default PendingCounter;