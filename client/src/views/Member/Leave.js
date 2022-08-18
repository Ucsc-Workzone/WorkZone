import Card from 'Components/Card';
import * as React from 'react';
import './styles/leave.css';
import { Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TotalIncomeLightCard from 'views/dashboard/Default/TotalIncomeLightCard';
import HeaderCounter from 'Components/HeaderCounter2';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LeaveForm from './LeaveForm';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0C518A',
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1', '2022.10.05', '01', 'pending', 'M.R. Herath'),
    createData('2', '2022.10.05', '01', 'pending', 'M.R. Herath'),
    createData('3', '2022.10.05', '01', 'pending', 'M.R. Herath')
];

const HeadList = {
    head1: 'No. of Leaves in July',
    head2: 'No of Leaves in 2022'
};
var CountList = {
    count1: 2,
    count2: 3
};

const MemberLeave = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="leavecontainer">
                <div>
                    <Button variant="contained" onClick={handleClickOpen} color="primary">
                        Request a Leave
                    </Button>
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
                </div>

                {/* <div className="card-section"> */}
                <HeaderCounter headlist={HeadList} countlist={CountList} />
                {/* </div> */}
                <div className="table-section">
                    <Divider>
                        <h2>Recent Leave History</h2>
                    </Divider>
                    <TableContainer component={Paper} className="table-data">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="right">Leave No</StyledTableCell>
                                    <StyledTableCell align="right">Request Date</StyledTableCell>
                                    <StyledTableCell align="right">No of Days</StyledTableCell>
                                    <StyledTableCell align="right">Status</StyledTableCell>
                                    <StyledTableCell align="right">Assign Member</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell align="right">{row.name}</StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
};

export default MemberLeave;
