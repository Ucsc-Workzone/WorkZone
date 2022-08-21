import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Feedback from "Components/Feedback";
const MemberFeedback = () => {
    return (
        <>
            <Box style = {{width:"100%" , justifyContent:"space-between"}}><Feedback></Feedback></Box>
        </>
    );
};

export default MemberFeedback;
