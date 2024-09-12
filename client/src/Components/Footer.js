import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import './styles/footer.css';

// ==============================|| MAIN FOOTER ||============================== //

const MainFooter = ({headlist, countlist}) => {
    return (
        <Box className="copy-right-main">
			<Box className="copy-right-sec">  
                <Typography>
                    &copy; 2022, All rights reserved by
                </Typography>
                <Typography variant='h3' sx={{colour:"white"}}>
                    &nbsp; WORKZONE
                </Typography>
			</Box>
        </Box>
        );
}
 
export default MainFooter;