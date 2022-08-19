import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PopupModel = ({msg}) => {
    return (  
        <>
         <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                     
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                               <LeaveForm />
                            </DialogContentText>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleClose}>Request</Button>
                            <Button onClick={handleClose} autoFocus>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
        
        </>
    );
}
 
export default PopupModel;