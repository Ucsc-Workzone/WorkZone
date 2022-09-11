import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import './styles/footer.css';

// ==============================|| MAIN FOOTER ||============================== //

const MainFooter = ({headlist, countlist}) => {
    return (
			<Box className="copy-right-sec" sx={{display:"flex",textAlign:"center", alignItems:"center",width:"100%"}}>  
                <Typography>
                    &copy; 2022, All rights reserved by
                </Typography>
                <Typography variant='h3' sx={{colour:"white"}}>
                    &nbsp; WORKZONE
                </Typography>
			</Box>
        );
}
 
export default MainFooter;