import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import './styles/footer.css';

// ==============================|| MAIN FOOTER ||============================== //

const MainFooter = ({headlist, countlist}) => {
    return (
			<Box className="copy-right-sec">  
                <Typography>
                    &copy; 2022, All rights reserved by University of Colombo School of Computing<br />
                    No: 35, Reid Avenue, Colombo 7, Sri Lanka.
                </Typography>
			</Box>
        );
}
 
export default MainFooter;