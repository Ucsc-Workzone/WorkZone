import * as React from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import './styles/headercounter.css';


const HeaderCounter3 = ({headlist, countlist}) => {
    return (
        <div className="header-counter">
            <Grid container spacing={2} minHeight={160}>
                <Grid xs display="flex" justifyContent="center" alignItems="center" direction="column">
                    <Box xs display="block">
                        <Typography variant="h3" component="p" className="" fontSize="1.5vw">
                            {headlist.head1}
                        </Typography>
                    </Box>
                    <Box xs display="block">
                        <Typography variant="h1" component="p" className="" fontSize="5vw">
                            {countlist.count1}
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center" direction="column">
                    <Box xs display="block">
                        <Typography variant="h3" component="p" className="" fontSize="1.5vw">
                            {headlist.head2}
                        </Typography>
                    </Box>
                    <Box xs display="block">
                        <Typography variant="h1" component="p" className="" fontSize="5vw">
                            {countlist.count2}
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center" direction="column">
                    <Box xs display="block">
                        <Typography variant="h3" component="p" className="" fontSize="1.5vw">
                            {headlist.head3}
                        </Typography>
                    </Box>
                    <Box xs display="block">
                        <Typography variant="h1" component="p" className="" fontSize="5vw">
                            {countlist.count3}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
        );
}
 
export default HeaderCounter3;