import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



const UserFeedback = () => {
    const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
    <><Typography variant='h1' component='h2' style={{marginTop:"30px" , color:"#000000" , marginBottom:"30px"}}>System Feedbacks</Typography>
    <Typography variant='h3' component='h3' style={{marginTop:"20px" , color:"#0C518A" , marginBottom:"10px" , fontWeight:"600"}}>Provide feedback on the system bugs and improvement suggestions
    </Typography>
    <Box style = {{width:"90%"}}><Stack>


    <TextField
          id="outlined-multiline-feedback"
        //   label="Feedback"
          multiline
          rows={8}
          defaultValue="Write your Feedback..."
          />
        <Box style = {{textAlign:"right" , width:"99%" , margin:"10px"}}><Button variant="contained">Submit</Button></Box></Stack></Box>
    </>    );
    }
 
export default UserFeedback;