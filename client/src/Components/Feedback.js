import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const UserFeedback = () => {
    const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submitFeedBack=()=>{

  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <Box style = {{textAlign:"right" , width:"99%" , margin:"10px"}}><Button variant="contained" onClick={handleClickOpen }>Submit</Button></Box></Stack></Box>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <h4>System feedback send successfully</h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
         
        </DialogActions>
      </Dialog>
    </>  
    
    
    );
    }
 
export default UserFeedback;