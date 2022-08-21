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
import HeaderCounter from 'Components/HeaderCounter3';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LeaveForm from './LeaveForm';
import NotificationList from 'layout/MainLayout/Header/NotificationSection/NotificationList';
import NotificationListLeave from 'Components/LeaveNotification';
import Chip from '@mui/material/Chip';

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

function createData(id, date, ndate, status, amember) {
    return { id, date, ndate, status, amember };
}

const rows = [
    createData('1', '2022.10.05', '02', 'Pending', 'M.R. Herath'),
    createData('2', '2022.08.05', '01', 'Accepted', 'S.D Bandara'),
    createData('3', '2022.07.04', '01', 'Accepted', 'J.K Rathnayake'),
    createData('4', '2022.06.14', '01', 'Rejected', 'J.K Rathnayake')
];

const HeadList = {
    head1: 'No. of Leaves in July',
    head2: 'No of Leaves in 2022',
    head3: 'Pending Assignments'
};
var CountList = {
    count1: 2,
    count2: 3,
    count3: 0
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
                            <Button onClick={handleClose}  variant="contained">Request</Button>
                            <Button onClick={handleClose} autoFocus  variant="outlined">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <div className="card-section">
                    <HeaderCounter headlist={HeadList} countlist={CountList} />
                    {/* <TotalIncomeLightCard 
                title={'Leaves in August'}
                count={1}
                />
                <TotalIncomeLightCard 
                  title={'Leaves in 2022'}
                  count={8}
                /> */}
                </div>
                <div className="table-section-head">
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
                                            <StyledTableCell align="right">{row.id}</StyledTableCell>
                                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                                            <StyledTableCell align="right">{row.ndate}</StyledTableCell>
                                            {row.status=='Pending' &&
                                                <StyledTableCell align="right">{<Chip variant="contained" color="warning" label="Pending " />}</StyledTableCell>

                                            }
                                             {row.status=='Accepted' &&
                                                <StyledTableCell align="right">{<Chip variant="contained" color="success" label="Accepted" />}</StyledTableCell>

                                                
                                            }
                                              {row.status=='Rejected' &&
                                                <StyledTableCell align="right">{<Chip variant="contained" color="error" label="Rejected" />}</StyledTableCell>

                                                
                                            }
                                            
                                            <StyledTableCell align="center">{row.amember}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='notification-List'>
                    {/* <Divider>
                            <h2>Leave Notifications</h2>
                        </Divider> */}
                        <NotificationListLeave ></NotificationListLeave>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberLeave;
