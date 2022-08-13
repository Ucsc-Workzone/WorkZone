import Card from 'Components/Card';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
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
const MemberLeave = () => {
    return (
        <>
            <div className="leavecontainer">
                <div>
                    <Button color="primary" variant="contained">
                        {' '}
                        Request a Leave
                    </Button>
                </div>

                <div className="card-section">
                    <TotalIncomeLightCard />
                    <TotalIncomeLightCard />
                </div>
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
